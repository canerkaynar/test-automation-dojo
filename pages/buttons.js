import FormStyle from '../components/styles/Form.js';
import SickButton from '../components/styles/SickButton.js';
import Breadcrumb from '../components/Breadcrumb.js';


export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleOnClick = (e) => {
        e.preventDefault(); 
        let buttonName = '';
        if(e.target.tagName === 'A') {
            buttonName = '3';
        } else if (e.target.tagName === 'INPUT') {
            buttonName = '1';
        } else {
            buttonName = '2';            
        }
        this.setState({
            text: `You have clicked the button ${buttonName}`
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Buttons"/>
                <h2>Buttons</h2>
                <FormStyle>
                    <input onClick={this.handleOnClick} className="btn" type="button" value="Button 1"/><br/><br/>
                    <button onClick={this.handleOnClick} title="button-title">Button 2</button><br/><br/>
                    <a onClick={this.handleOnClick} id="button3" className="btn" href="#">Button 3</a>
                    <br/><br/>
                    <h3>{this.state.text}</h3>
                </FormStyle>
            </React.Fragment>
        )
    }
    
};