/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, Container, HamburgerToggler,
} from 'mdbreact';

class NavbarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse1: false,
      collapseID: '',
    };
  }

  // Function from MDBReact
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  // Function from MDBReact
  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  }

  // Renders the hamburger header.
  render() {
    const { navbarOnClickHandler, route } = this.props;
    return (
      <Container fluid>
        <Router>
          <Navbar color="mdb-color lighten-1" style={{ marginTop: '20px' }} light>
            <Container>
              <NavbarBrand>
                Entry Form
              </NavbarBrand>
              <HamburgerToggler color="#d3531a" id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
              <Collapse isOpen={this.state.collapse1} navbar>
                <NavbarNav left>
                  <NavItem active={route === 'settings'}>
                    <NavLink
                      to=""
                      onClick={() => navbarOnClickHandler('settings')}
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem active={route === 'bInfo'}>
                    <NavLink to="" onClick={() => navbarOnClickHandler('bInfo')}>
                      Basic Info
                    </NavLink>
                  </NavItem>
                  <NavItem active={route === 'vInfo'}>
                    <NavLink to="" onClick={() => navbarOnClickHandler('vInfo')}>
                      Vehicle Info
                    </NavLink>
                  </NavItem>
                  <NavItem active={route === 'review'}>
                    <NavLink to="" onClick={() => navbarOnClickHandler('review')}>
                      Review
                    </NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Container>
          </Navbar>
        </Router>
      </Container>
    );
  }
}

export default NavbarHeader;
