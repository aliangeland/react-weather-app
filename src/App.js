import React from 'react';
import {withRouter} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
    render(){
        return(
            <div className="container mb-5">
                <Header />
                <Main />
            </div>
        );
    }
}

export default withRouter(App);