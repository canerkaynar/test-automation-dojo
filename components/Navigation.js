import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';
import styled from 'styled-components';
import Cart from './Cart';


const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: #007dc6;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
  #logo:hover, #logo:focus {
    outline: none;
    background: #007dc6;
    color: white;
  }
  #logo:after, #logo:before{
    display: none;
  }
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <>
      <NavStyles>
{/*         <Logo>
          <Link href="/">
            <a id="logo">prototype</a>
          </Link>
        </Logo> */}

        <Link href="/items">
          <a>Shop</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {(toggleCart) => (
                <button onClick={toggleCart}>My Cart</button>
              )}
            </Mutation>
          </>
        )}
        {!me && (
          <Link href="/signin">
            <a>Sign In</a>
          </Link>

        )}
      </NavStyles>
      { me && (
        <Cart />
      )}
      </>
    )}
  </User>
);

export default Nav;