import FormStyle from '../components/styles/Form.js';
import SickButton from '../components/styles/SickButton.js';
import Breadcrumb from '../components/Breadcrumb.js';


export default class Buttons extends React.Component {
    render() {
        return (
            <FormStyle>
                <Breadcrumb currentPage="Buttons"/>
                <h2>Buttons</h2>
                <input className="btn" type="button" value="Input Button"/><br/><br/>
                <button title="button-title">Button</button><br/><br/>
                <a className="btn" href="#">Link Button</a>
            </FormStyle>
        )
    }
    
};