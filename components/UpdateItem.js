import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import styled from 'styled-components';


const CreateItemStyle = styled.div`
  fieldset {
    max-width: none;
  }
  .fieldset-left {
    float: left;
    width: 350px;
    img {
      display: block;
      width: 350px;
      border-radius: 4px;
    }
    div {
      width: 100%;
      background: #f1f1f1;
    }
  }
  .fieldset-right {
    float: left;
    margin-left: 25px;    
    max-width: 400px;
    width: calc(100% - 375px);
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
      item(where: { id: $id}) {
          id
          title
          description
          largeImage
          price
      }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
        id: $id
        title: $title
        description: $description
        price: $price) {
            id
            title
            description
            price 
    }
  }
`;

class UpdateItem extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    console.log(formatMoney(val))
    this.setState({ [name]: type === 'number' ? val : val });
  };

  updateItem = async (e, updateItemMutation) => {
      e.preventDefault(); 
      const res = await updateItemMutation({
          variables: {
              id: this.props.id,
              ...this.state
          }
      });
  }

  render() {
    return (
      <CreateItemStyle>
        <Query query={SINGLE_ITEM_QUERY} variables={{id: this.props.id}}>
        {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data.item) return <p>No item found for ID {this.props.id}</p>;
            return (
                <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                {(updateItem, { loading, error }) => (
                    <Form onSubmit={e => this.updateItem(e, updateItem)}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                        <div className="fieldset-left">
                            <div>
                                <img width="350" src={data.item.largeImage} alt="Upload Preview" />
                            </div>
                        </div>
                        <div className="fieldset-right">
                        <label htmlFor="title">
                            Title
                            <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                            value={this.state.title}
                            defaultValue={data.item.title}
                            onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="price">
                            Price
                            <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price"
                            required
                            value={this.state.price}
                            defaultValue={data.item.price}
                            onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="description">
                            Description
                            <textarea
                            id="description"
                            name="description"
                            placeholder="Enter A Description"
                            required
                            value={this.state.description}
                            defaultValue={data.item.description}
                            onChange={this.handleChange}
                            />
                        </label>
                        <button type="submit">{loading ? 'Saving Changes' : 'Save Changes'}</button>
                        </div>
                        
                    </fieldset>
                    </Form>
          )}
        </Mutation>
            );
          }}
        
        </Query>
      </CreateItemStyle>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };