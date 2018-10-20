import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand } from 'reactstrap';

import Search from './Search';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar color="dark" dark expand>
                    <NavbarToggler right="true" onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Search />
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <NavbarBrand className="text-white-50 ml-4">Task #3: Weather App</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Header)
