import FormStyle from '../components/styles/Form.js';

const Dropdown = () => (
    <FormStyle onSubmit={(e) => e.preventDefault()}>
        <h2>Checkbox</h2>
        <fieldset>
            <select className="field4">
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </fieldset>
        <fieldset>
            <select id="field1">
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </fieldset>
        <fieldset>
            <select name="field2">
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>       
        </fieldset>

        <fieldset>
            <select placeholder="field3">
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </fieldset>
            
    </FormStyle>
);

export default Dropdown;