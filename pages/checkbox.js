import FormStyle from '../components/styles/Form.js';

const Checkbox = () => (
    <FormStyle onSubmit={(e) => e.preventDefault()}>
        <h2>Checkbox</h2>
        <fieldset>
            <div className="checkbox-wrapper">
                <input type="checkbox" className="field1" value="Male"/><label>Male</label>
            </div>
            <div className="checkbox-wrapper">
                <input type="checkbox" className="field2" value="Female"/><label>Female</label>
            </div>
        </fieldset>

        <fieldset>
            <div className="checkbox-wrapper">
                <input type="checkbox" id="field3" value="red"/><label htmlFor="field3">Red</label>
            </div>
            <div className="checkbox-wrapper">
                <input type="checkbox" id="field4" value="Orange"/><label htmlFor="field4">orange</label>   
            </div>
        </fieldset>

        <fieldset>
            <div className="checkbox-wrapper">
                <input type="checkbox" name="field5" value="BMW"/><label>BMW</label>
            </div>
            <div className="checkbox-wrapper">
                <input type="checkbox" name="field6" value="Audi"/><label>Audi</label>
            </div>
        </fieldset>
        
    </FormStyle>
);

export default Checkbox;