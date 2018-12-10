import React from 'react';
import FormStyle from '../components/styles/Form.js';
import Breadcrumb from '../components/Breadcrumb.js';

export default class Input extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Input"/>
                <h2>Input</h2>
                <FormStyle onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                    <div className="spacing-base-big">
                        <input id="field1" type="text"/>
                    </div>
                    <div className="spacing-base-big">
                        <input name="field2" type="text"/>
                    </div>
                    <div className="spacing-base-big">
                        <input placeholder="field3" type="text"/>
                    </div>
                    <div className="spacing-base-big">
                        <label htmlFor="field4">label</label>
                        <input id="id-field4" type="text" placeholder="placeholder"/>
                    </div>
                    <div className="spacing-base-big">
                        <input className="field5" type="text"/>
                    </div>
                    </fieldset>
                </FormStyle>
            </React.Fragment>
        )
    }
};