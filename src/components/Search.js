import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Search extends Component{

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            value: null
        }
    }

    submitForm () {
        // e.preventDefault();
        let value = this.refs.searchVal.value;
        this.setState({redirect:true,value: value});
        this.props.history.push({
            pathname: '/search/'+value,
            state: { city: value }
        })

    }
    componentWillMount(){
        this.setState({redirect:true,value: ""});
    }
    render(){
        return(
            <form className="form-inline" onSubmit={this.submitForm.bind(this)}>
                <input className="form-control mr-sm-2" type="search" ref="searchVal" placeholder="Enter city name" aria-label="Enter city name"/>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search Weather</button>
            </form>
        );
    }
}
export default withRouter(Search);