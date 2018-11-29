import FormStyle from '../components/styles/Form.js';
import Breadcrumb from '../components/Breadcrumb.js';

export default class Checkbox extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Checkbox"/>
                <h2>Checkbox</h2>
                <FormStyle onSubmit={(e) => e.preventDefault()}> 
                    <fieldset>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" className="field1" value="Gandalf"/><label>Gandalf</label>
                        </div>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" id="field2" value="Aragorn"/><label htmlFor="field2">Aragorn</label>
                        </div>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" name="field3" value="Legolas"/><label>Legolas</label>
                        </div>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" name="field4" id="field4" value="Legolas"/><label htmlFor="field4">Saruman</label>
                        </div>
                    </fieldset>
                </FormStyle>
            </React.Fragment>
        )
    }
}