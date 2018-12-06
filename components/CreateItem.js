import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
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
    width: 300px;
    img {
      margin: 0 auto;
      display: block;
      padding: 24px 0px;
      margin-top: 15px;
      width: 240px;
    }
    div {
      width: 100%;
      background: #f1f1f1;
    }
  }
  .fieldset-right {
    float: left;
    margin-left: 40px;    
    width: 400px;
  }
`;

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: undefined,
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    console.log(formatMoney(val))
    this.setState({ [name]: type === 'number' ? val : val });
  };

  uploadFile = async e => {
    console.log('uploading file...');
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'test_automation_dojo');

    const res = await fetch('https://api.cloudinary.com/v1_1/cnrkynr/image/upload', {
      method: 'POST',
      body: data,
    });
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };
  render() {
    return (
      <CreateItemStyle>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <Form
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                // call the mutation
                const res = await createItem();
                // change them to the single item page
                console.log(res);
                Router.push({
                  pathname: '/item',
                  query: { id: res.data.createItem.id },
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <div className="fieldset-left">
                  <label htmlFor="file">
                    Image
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Upload an image"
                      required
                      onChange={this.uploadFile}
                    />
                    {this.state.image && (
                      <div>
                        <img width="240" src={this.state.image} alt="Upload Preview" />
                      </div>
                    )}
                  </label>
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
                      onChange={this.handleChange}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </div>
                
              </fieldset>
            </Form>
          )}
        </Mutation>
      </CreateItemStyle>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };