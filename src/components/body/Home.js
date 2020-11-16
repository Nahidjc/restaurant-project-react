import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    //console.log("mapStateToProps", state);
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("HOME STATE", this.state);
        console.log("HOME PROPS", this.props);
    }
    render() {

        return (
            <div>

            </div>
        );
    }
}


export default connect(mapStateToProps)(Home);