import FormStyle from '../components/styles/Form.js';

const Input = () => {

    return (
        <FormStyle onSubmit={(e) => e.preventDefault()}>
            <h2>Input</h2>
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
    )
};

export default Input;