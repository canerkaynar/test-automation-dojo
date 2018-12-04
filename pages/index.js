import React, { Component } from 'react';
import Items from '../components/Items';
import Navigation from '../components/Navigation';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <Items page={parseFloat(this.props.query.page) || 1} />
            </React.Fragment>
        );
    }
}

export default Home;
