import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Weather from './Weather';

const Cities = ['Istanbul','Berlin','London','Helsinki','Dublin','Vancouver'];

class Home extends Component {

    render(){
        return(
            <div className="row">
                {Cities.map((c,index) => {
                    return <Weather city={c} key={index} />
                })
                }
            </div>
        );
    }
}

export default withRouter(Home);