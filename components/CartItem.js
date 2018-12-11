import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
    border-radius: 2px;
    object-fit: cover;
  }
  .cart-item-title {
      margin-bottom: 10px;
  }
  h3,
  p {
    margin: 0;
    .quantity {
        float: left;
    }
    .price {
        float: right;
        margin-right: 15px;
        font-family: "roboto bold";
    }
  }
`;

const CartItem = ({ cartItem }) => {
  // first check if that item exists
  if (!cartItem.item)
    return (
      <CartItemStyles>
        <p>This item has been removed.</p>
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );
  return (
    <CartItemStyles>
      <img width="80" height="75" src={cartItem.item.image} alt={cartItem.item.title} />
      <div className="cart-item-details">
        <div className="cart-item-title">{cartItem.item.title}</div>
        <p>
            <span className="quantity">{cartItem.quantity} pcs</span>
            <span className="price">${cartItem.item.price * cartItem.quantity}</span>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;