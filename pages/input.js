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
                        <input className="field1" type="text"/>
                    </fieldset>
                    <fieldset>
                        <input id="field2" type="text"/>
                    </fieldset>
                    <fieldset>
                        <input name="field3" type="text"/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="field4" type="text"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="field5">watergarden</label>
                        <input id="field5" type="text" placeholder="p-field5"/>
                    </fieldset>
                </FormStyle>
            </React.Fragment>
        )
    }
};