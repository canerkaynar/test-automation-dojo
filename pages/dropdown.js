import FormStyle from '../components/styles/Form.js';
import Breadcrumb from '../components/Breadcrumb.js';

export default class Dropdown extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Dropdown"/>
                <h2>Dropdown</h2>
                <FormStyle onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                    <div className="spacing-base-big">
                        <select id="field1">
                            <option value="">Seçiniz</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="spacing-base-big">
                        <select name="field2">
                            <option value="">Seçiniz</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select> 
                    </div>
                    <div className="spacing-base-big">
                        <select placeholder="field3">
                            <option value="">Seçiniz</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="spacing-base-big">
                        <select className="field4">
                            <option value="">Seçiniz</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                            </select>
                    </div>
                    </fieldset>
                </FormStyle>
            </React.Fragment>
        )
    }
}
