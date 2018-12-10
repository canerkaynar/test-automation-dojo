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
            buttonName = '2';
        } else if (e.target.tagName === 'INPUT') {
            buttonName = '3';
        } else {
            buttonName = '1';            
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
                    <button onClick={this.handleOnClick} title="button-title">Button 1</button><br/><br/>
                    <a onClick={this.handleOnClick} id="button2" className="btn" href="#">Button 2</a>
                    <br/><br/>
                    <input onClick={this.handleOnClick} className="btn" type="button" value="Button 3"/><br/>
                    <h3>{this.state.text}</h3>
                </FormStyle>
            </React.Fragment>
        )
    }
    
};