const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { hasPermission } = require('../utils');

const Mutations = {
    async createItem(parent, args, ctx, info) {
        
        if (!ctx.request.userId) {
            throw new Error('You must be logged in to do that!');
          }

        const item = await ctx.db.mutation.createItem(
            {
                data: {
                    // This is how to create a relationship between the Item and the User
                    user: {
                        connect: {
                        id: ctx.request.userId,
                        },
                    },
                    ...args
                }
            },
            info
        );

        return item;
    },
    async updateItem(parent, args, ctx, info) {
        const where = { id: args.id };
        // find the item
        const item = await ctx.db.query.item({ where }, `{ id title user { id }}`);
        // Check if they own that item, or have the permissions
        const ownsItem = item.user.id === ctx.request.userId;
        const hasPermissions = ctx.request.user.permissions.some(permission =>
          ['ADMIN', 'ITEMUPDATE'].includes(permission)
        );
    
        if (!ownsItem && !hasPermissions) {
          throw new Error("You don't have permission to do that!");
        } 
        //first take a copy of updates
        const updates = { ...args };
        //remove the ID from the updates
        delete updates.id;
        //run the update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id
            }
        }, info)
        
    },
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };
        // 1. find the item
        const item = await ctx.db.query.item({ where }, `{ id title user { id }}`);
        // 2. Check if they own that item, or have the permissions
        const ownsItem = item.user.id === ctx.request.userId;
        const hasPermissions = ctx.request.user.permissions.some(permission =>
          ['ADMIN', 'ITEMDELETE'].includes(permission)
        );
    
        if (!ownsItem && !hasPermissions) {
          throw new Error("You don't have permission to do that!");
        }
    
        // 3. Delete it!
        return ctx.db.mutation.deleteItem({ where }, info);
      },
    async signup(parent, args, ctx, info) {
        // lowercase their email
        args.email = args.email.toLowerCase();
        // check if there is a user with that email
        const userExists = await ctx.db.query.user({ where: { email: args.email } });
        if (userExists) {
          throw new Error(`This account already exists`);
        }
        // hash their password
        const password = await bcrypt.hash(args.password, 10);
        // create the user in the database
        const user = await ctx.db.mutation.createUser(
          {
            data: {
              ...args,
              password,
              permissions: { set: ['USER'] },
            },
          },
          info
        );
        // create the JWT token for them
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // We set the jwt as a cookie on the response
        ctx.response.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });
        // Finalllllly we return the user to the browser
        return user;
      },
      async signin(parent, { email, password }, ctx, info) {
        // 1. check if there is a user with that email
        const user = await ctx.db.query.user({ where: { email } });
        if (!user) {
          throw new Error(`No such user found for email ${email}`);
        }
        // 2. Check if their password is correct
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          throw new Error('Invalid Password!');
        }
        // 3. generate the JWT Token
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // 4. Set the cookie with the token
        ctx.response.cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 365,
        });
        // 5. Return the user
        return user;
      },
      signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token');
        return { message: 'Goodbye!' };
      },
      async updatePermissions(parent, args, ctx, info) {
        // 1. Check if they are logged in
        if (!ctx.request.userId) {
          throw new Error('You must be logged in!');
        }
        // 2. Query the current user
        const currentUser = await ctx.db.query.user(
          {
            where: {
              id: ctx.request.userId,
            },
          },
          info
        );
        // 3. Check if they have permissions to do this
        hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
        // 4. Update the permissions
        return ctx.db.mutation.updateUser(
          {
            data: {
              permissions: {
                set: args.permissions,
              },
            },
            where: {
              id: args.userId,
            },
          },
          info
        );
      },
      async addToCart(parent, args, ctx, info) {
        // 1. Make sure they are signed in
        const { userId } = ctx.request;
        if (!userId) {
          throw new Error('You must be signed in soooon');
        }
        // 2. Query the users current cart
        const [existingCartItem] = await ctx.db.query.cartItems({
          where: {
            user: { id: userId },
            item: { id: args.id },
          },
        });
        // 3. Check if that item is already in their cart and increment by 1 if it is
        if (existingCartItem) {
          console.log('This item is already in their cart');
          return ctx.db.mutation.updateCartItem(
            {
              where: { id: existingCartItem.id },
              data: { quantity: existingCartItem.quantity + 1 },
            },
            info
          );
        }
        // 4. If its not, create a fresh CartItem for that user!
        return ctx.db.mutation.createCartItem(
          {
            data: {
              user: {
                connect: { id: userId },
              },
              item: {
                connect: { id: args.id },
              },
            },
          },
          info
        );
      },
      async removeFromCart(parent, args, ctx, info) {
        // 1. Find the cart item
        const cartItem = await ctx.db.query.cartItem(
          {
            where: {
              id: args.id,
            },
          },
          `{ id, user { id }}`
        );
        // 1.5 Make sure we found an item
        if (!cartItem) throw new Error('No CartItem Found!');
        // 2. Make sure they own that cart item
        if (cartItem.user.id !== ctx.request.userId) {
          throw new Error('Cheatin huhhhh');
        }
        // 3. Delete that cart item
        return ctx.db.mutation.deleteCartItem(
          {
            where: { id: args.id },
          },
          info
        );
      },
};

module.exports = Mutations;
