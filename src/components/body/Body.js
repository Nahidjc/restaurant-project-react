import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';

const Body = () => {
    return (

        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />

                <Redirect from="/" to="/home"></Redirect>
            </Switch>



        </div>
    );
};

export default Body;