import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

import Home from './Home';
import Details from './Details';
import Weather from './Weather';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/weather/:woeid' render={(props)=> <Details woeid={props.match.params.woeid}/> }/>
            <Route exact path='/search/:city'  render={(props)=> <Weather city={props.match.params.city}/> }/>
        </Switch>
    </main>
);

export default withRouter(Main);