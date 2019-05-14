import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
  import { Link } from 'react-router-dom';

export default class Example extends React.Component {
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
  
  render() {
      let styles = {
          marginRight: '10vw',
          paddingTop:'10px'
        
      }

    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar style={{padding:'13px'}}>
              <NavItem style={styles}>
                <Link to="/home" style={{color:'white', textDecoration:'none'}}><strong><i className="fa fa-user-alt" /> ABOUT ME</strong></Link>
              </NavItem>
              <NavItem style={styles}>
                <Link to="/resume" style={{color:'white', textDecoration:'none'}}><strong><i className="fa fa-file"/> RESUME</strong></Link>
              </NavItem>
              
              <NavItem style={styles}>
                <Link to="/portfolio" style={{color:'white', textDecoration:'none'}}><strong><i className="fa fa-portrait"/> PORTFOLIO</strong></Link>
              </NavItem>
              
              <NavItem style={styles}>
                <Link to="/blog" style={{color:'white', textDecoration:'none'}}><strong><i className="fa fa-blog"/> BLOG</strong></Link>
              </NavItem>

              <NavItem style={styles}>
                <Link to="/contactus" style={{color:'white', textDecoration:'none'}}><strong><i className="fa fa-paper-plane" /> CONTACT US</strong></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}