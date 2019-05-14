import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import Hero from "./Hero.jsx";
import AboutUs from './AboutUs.jsx';

export default class Example extends React.Component {
    render() {
        return (
            <Container style={{marginTop: '50px'}}>
                <Row>
                    <Col><h1> <Badge color="primary">Resume</Badge></h1></Col>
                </Row>
            
                <Row md="12" style={{marginTop:'20px'}}>
                    <Col md="3" style={{background:'white', height: '80%'}}>
                       <Hero />
                    </Col>
                    <div style={{padding:'20px'}}></div>
                    {/* <Col sm="1"></Col> */}
                    <Col md="8" style={{ background: 'white', height:'100% auto'}}>
                      <AboutUs/>
                    </Col>
                </Row>
            </Container>
        );
    }
}