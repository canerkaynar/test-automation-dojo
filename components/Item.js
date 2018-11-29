import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <div className="item-inner">
            {item.image && <img width="240" src={item.image} alt={item.title} />}
            <div className="detail-wrapper">
                <Title>
                <Link
                    href={{
                    pathname: '/item',
                    query: { id: item.id },
                    }}
                >
                    <a>{item.title}</a>
                </Link>
                </Title>
                <p>{item.description}</p>
                <PriceTag>{formatMoney(item.price)}</PriceTag>
            </div>
            <div className="buttonList">
            <Link
                href={{
                pathname: 'update',
                query: { id: item.id },
                }}
            >
                <a>Edit ✏️</a>
            </Link>
            <button>Add To Cart</button>
            <button>Delete </button>
            </div>
        </div>
      </ItemStyles>
    );
  }
}