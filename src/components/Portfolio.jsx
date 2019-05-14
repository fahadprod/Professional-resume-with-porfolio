import React from 'react';

import { Container, Row, Col, Badge } from "reactstrap";
import Hero from "./Hero.jsx";
import Portfolio_image from './Portfolio_image.jsx';

const Portfolio = () => {
    return (
      <Container style={{ marginTop: '50px' }}>
            <Row>
                <Col><h1> <Badge color="primary">Resume</Badge></h1></Col>
            </Row>

            <Row md="12" style={{ marginTop: '20px' }}>
                <Col sm="3" style={{ background: 'white', height: '80%' }}>
                    <Hero />
                </Col>
                <div style={{ padding: '20px' }}></div>
                {/* <Col sm="1"></Col> */}
                <Col sm="8" style={{ background: 'white', height: '100%' }}>
                     <h5 style={{margin:'20px'}}><strong>PORTFOLIO</strong></h5>
                     <hr/>
                     <Portfolio_image/>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;