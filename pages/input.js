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
                        <input className="field1" type="text"/>
                    </div>
                    <div className="spacing-base-big">
                        <input id="field2" type="text"/>
                    </div>
                    <div className="spacing-base-big">
                        <input name="field3" type="text"/>
                    </div>
                    <div className="spacing-base-big">
                        <input placeholder="field4" type="text"/>
                    </div>
                    <div className="spacing-base">
                        <label htmlFor="field5">watergarden</label>
                        <input id="field5" type="text" placeholder="p-field5"/>
                    </div>
                    </fieldset>
                </FormStyle>
            </React.Fragment>
        )
    }
};