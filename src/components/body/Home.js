import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    //console.log("mapStateToProps", state);
    return {
        dishes: state.dishes,
        comments: state.comments,
        sample: state.sample
    }
}


class Home extends Component {
    componentDidMount() {
        console.log("HOME STATE", this.state);
        console.log("HOME PROPS", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: "Bohubrihi"
        })
    }

    componentDidUpdate() {
        console.log("HOME PROPS UPDATED", this.props);
    }

    render() {

        return (
            <div>

            </div>
        );
    }
}


export default connect(mapStateToProps)(Home);