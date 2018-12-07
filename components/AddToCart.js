import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { ALL_ITEMS_QUERY } from './Items';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {

  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    console.log('Running remove from cart update fn');
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    const addedProduct = payload.data.addToCart;
    if (data.me.cart.filter(cartItem => cartItem.item.id === addedProduct.id).length) {
      data.me.cart.map((cartItem,index) => {
        if(cartItem.item.id === addedProduct.id) {
          data.me.cart[index].quantity += 1;
        }
      });
    } 
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    const { id, item } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        update={this.update}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        optimisticResponse={{
          __typename: 'Mutation',
          addToCart: {
            __typename: 'CartItem',
            id: id,
            quantity: 1
          },
        }}
      >
        {(addToCart, { loading }) => (
          <button disabled={loading} onClick={addToCart}>
            {loading ? 'Adding To Cart' : 'Add To Cart'}
          </button>
        )}
      </Mutation>
    );
  }
}
export default AddToCart;