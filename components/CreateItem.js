import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import FormStyle from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Dropzone from 'react-dropzone'


const CreateItemStyle = styled.div`
  fieldset {
    max-width: none;
  }
  .fieldset-left {
    float: left;
    width: 300px;
    border-radius: 2px;
    img {
      margin: 0 auto;
      display: block;
      padding: 24px 0px;
      width: 240px;
    }
    .img-wrapper {
      width: 100%;
      background: #f1f1f1;
      text-align: center;
    }
    .file-name {
      margin: 0 auto;
      padding-bottom: 15px;
    }
  }
  .fieldset-right {
    float: left;
    margin-left: 40px;    
    width: 400px;
  }
  .explanation {
    padding: 20px 10px;
    text-align: center;
  }

  .dropzone {
    width: 100%;
    position: relative;
    height: auto;
    border-width: 2px;
    border-color: rgb(102, 102, 102);
    border-style: dashed;
    border-radius: 2px;
    cursor: pointer;
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
    file: undefined
  };

  handleOnChange(e) {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    console.log(formatMoney(val))
    this.setState({ [name]: type === 'number' ? val : val });
  };

  async uploadFile(e) {
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
      file
    });
  };
  render() {
    return (
      <CreateItemStyle>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={{
          ...this.state,
          image: this.state.image ? this.state.image : 'https://res.cloudinary.com/cnrkynr/image/upload/v1544207274/test-automation-dojo/tofwmhdn7qn9k8d922fb.png',
          largeImage: this.state.largeImage ? this.state.image : 'https://res.cloudinary.com/cnrkynr/image/upload/c_scale,q_auto,w_350/v1544207274/test-automation-dojo/tofwmhdn7qn9k8d922fb.png',
          }}>
          {(createItem, { loading, error }) => (
            <FormStyle>
                <Formik
                    initialValues={{ title: '', description: '', price: '' }}
                    onSubmit={async (values, { setSubmitting }) => {
                      await createItem()
                      .then((res) => {
                        setSubmitting(true)
                        Router.push({
                          pathname: '/item',
                          query: { id: res.data.createItem.id }
                        });
                      },() => {
                        setSubmitting(false)
                      });
                    }}
      
                    validationSchema={Yup.object().shape({
                        title: Yup.string().required('Enter a product title'),
                        description: Yup.string().required('Enter a short description'),
                        price: Yup.string().required('Enter a product price').max(6,'Maximum price should be 999999')
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
                              <div className="file-upload">
                                <Dropzone
                                    onDrop={this.onDrop}
                                    onFileDialogCancel={this.onCancel}
                                    accept="image/jpeg, image/png"
                                    name="file"
                                    type="file"
                                    id="file"
                                    className="dropzone"
                                    onChange={(e) => {handleChange(e); this.uploadFile(e)}}
                                >
                                    <div className="explanation">Upload a product image</div>
                                    {this.state.image && (
                                  <div className="img-wrapper">
                                    <img width="240" src={this.state.image} alt="Upload Preview" />
                                    <div className="file-name">{this.state.file.original_filename}</div>
                                  </div>
                                )}
                                </Dropzone>
                                
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
                                <input
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
                                <button className="btn" type="submit" disabled={isSubmitting}>{loading ? 'Submitting' : 'Submit'}</button>
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
      </CreateItemStyle>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };