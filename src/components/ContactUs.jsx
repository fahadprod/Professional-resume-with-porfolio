import React, { Component } from 'react';

import  { Container, Row, Col, Badge } from 'reactstrap';
import Hero from './Hero.jsx';
import Contact_Form from './Contact_Form.jsx';

class Contact extends Component{
    render() {
        return(
           <Container style={{ marginTop: '50px' }}>
            <Row>
                <Col><h1> <Badge color="primary">Resume</Badge></h1></Col>
            </Row>

            <Row md="12" style={{ marginTop: '20px' }}>
                <Col sm="3" style={{ background: 'white', height:'80%' }}>
                    <Hero />
                </Col>
                <div style={{ padding: '20px' }}></div>
                {/* <Col sm="1"></Col> */}
                <Col sm="8" style={{ background: 'white', height:'100%' }}>
                 <Contact_Form />
                </Col>
            </Row>
        </Container>
        )
    }
}
export default Contact;