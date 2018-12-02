import React, { Component } from 'react';
import Items from '../components/Items';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Navigation</div>
                <Items page={parseFloat(this.props.query.page) || 1} />
            </React.Fragment>
        );
    }
}

export default Home;
