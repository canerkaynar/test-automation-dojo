import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import FormStyle from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
      border-radius: 2px;
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

  handleOnChange(e) {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: type === 'number' ? val : val });
  };

  updateItem = async (e, updateItemMutation) => {
      e.preventDefault(); 
      if (confirm('Are you sure you want to update this item?')) {
        const res = await updateItemMutation({
          variables: {
              id: this.props.id,
              ...this.state
          }
        }).catch(err => {
          alert(err.message);
        });
      }
      
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
                {(updateItemMutation, { loading, error }) => (
                  <FormStyle>
                    <Formik
                        initialValues={{ title: data.item.title, description: data.item.description, price: data.item.price }}
                        onSubmit={async (values, { setSubmitting }) => {
                          if (confirm('Are you sure you want to update this item?')) {
                                  await updateItemMutation({
                                    variables: {
                                        id: this.props.id,
                                        ...this.state
                                    }
                                  }).then((res) => {
                                    setSubmitting(true);
                                    Router.push({
                                      pathname: '/item',
                                      query: { id: res.data.updateItem.id }
                                    });
                                  }, (err) => {
                                    setSubmitting(false);
                                    alert(err.message);
                                  });
                                }
                        }}
          
                        validationSchema={Yup.object().shape({
                            title: Yup.string().required('Enter a product title'),
                            description: Yup.string().required('Enter a short description'),
                            price: Yup.string().required('Enter a product price')
                    })}>
                    {props => {
                        const {
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        } = props;
                        return (
                        <form onSubmit={handleSubmit}
                              method="post">
                              <fieldset disabled={loading} aria-busy={loading}>
                              <div className="fieldset-left">
                                <div>
                                    <img width="350" src={data.item.largeImage} alt="Upload Preview" />
                                </div>
                              </div>
                              <div className="fieldset-right">
                                  <Error error={error} />
                                  <div className="spacing-base">
                                    <label htmlFor="title">Title</label>
                                    <input
                                      type="text"
                                      id="title"
                                      name="title"
                                      value={values.title}
                                      onChange={(e) => {handleChange(e); this.handleOnChange(e)}}
                                      onBlur={handleBlur}
                                      className={
                                        errors.title && touched.title ? 'text-input error' : 'text-input'
                                      }
                                    />
                                    {   
                                      errors.title &&
                                      touched.title && <div className="spacing-top-mini input-feedback">{errors.title}</div>
                                    }
                                  </div>
                                  <div className="spacing-base">
                                    <label htmlFor="price">Price</label>
                                    <input
                                      type="number"
                                      id="price"
                                      name="price"
                                      value={values.price}
                                      onChange={(e) => {handleChange(e); this.handleOnChange(e)}}
                                      onBlur={handleBlur}
                                      className={
                                        errors.price && touched.price ? 'text-input error' : 'text-input'
                                      }
                                    />
                                    {   
                                      errors.price &&
                                      touched.price && <div className="spacing-top-mini input-feedback">{errors.price}</div>
                                    }
                                  </div>
                                  <div className="spacing-base">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                      id="description"
                                      name="description"
                                      value={values.description}
                                      onChange={(e) => {handleChange(e); this.handleOnChange(e)}}
                                      onBlur={handleBlur}
                                      className={
                                        errors.description && touched.description ? 'text-input error' : 'text-input'
                                      }
                                    />
                                    {   
                                      errors.description &&
                                      touched.description && <div className="spacing-top-mini input-feedback">{errors.description}</div>
                                    }
                                  </div>
                                  <div className="spacing-top-big">
                                    <button className="btn" type="submit" disabled={isSubmitting}>{loading ? 'Saving Changes' : 'Save Changes'}</button>
                                  </div>
                                </div>
                              </fieldset>
                        </form>
                        );
                     }}
                    </Formik>
                </FormStyle>
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