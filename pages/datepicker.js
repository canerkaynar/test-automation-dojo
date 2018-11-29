import moment from "moment";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import Breadcrumb from '../components/Breadcrumb.js';


export default class Datepicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            focus: null
        }
    }

    handleDateChange(date) {
        this.setState({
            ...this.state,
            date
        })
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumb currentPage="Datepicker"/>
                <h2>Datepicker</h2>
                <SingleDatePicker
                          // showClearDate={true}
                          inputIconPosition="after"
                          small={true}
                          block={false}
                          numberOfMonths={1}
                          date={this.state.date}
                          onDateChange={date => this.handleDateChange(date)}
                          focused={this.state.focused}
                          onFocusChange={({ focused }) =>
                            this.setState({ focused })
                          }
                          openDirection="down"
                          hideKeyboardShortcutsPanel={true}
                        /> 
            </React.Fragment>   
        )
    }
};

