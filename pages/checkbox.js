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
                            <input type="checkbox" id="field1" value="Aragorn"/><label htmlFor="field1">Aragorn</label>
                        </div>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" name="field2" value="Legolas"/><label>Legolas</label>
                        </div>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" name="field3" id="field3" value="Legolas"/><label htmlFor="field3">Saruman</label>
                        </div>
                        <div className="checkbox-wrapper">
                            <input type="checkbox" className="field4" value="Gandalf"/><label>Gandalf</label>
                        </div>
                    </fieldset>
                </FormStyle>
            </React.Fragment>
        )
    }
}