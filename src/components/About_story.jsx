import React, { Component } from 'react';
import { Container, Col, Row} from 'reactstrap';




class about_story extends Component {


    render (){
        let styles = {
            height: '70px',
            width: '70px',
            backgroundColor: 'blue',
            border: 'none',
            borderRadius: '100%',
            margin:'20px auto'
        }
        return (
            <div>
                
                <h5 style={{ paddingTop: '25px' }}><strong>SERVICES</strong></h5>
                <hr />
                <Container>
                    <Row sm="12">
                        <Col sm="4" md= "4">
                            <div style={{  display: 'grid', justifyContent: 'center', textAlign:'center'}}>
                                <div style={styles}>
                                    <i className="fab fa-whatsapp" style={{ color: 'white', padding: '23px', fontSize: '25px' }} />
                                </div>
                                <p><strong>WEB DEVELOPMENT</strong></p>
                                <p>We have created the new macbook psd version with scalable vector shapes.</p>
                            </div> 
                        </Col>
                        <Col sm="4" md="4">
                            <div style={{display:'grid', justifyContent:'center', textAlign:'center' }}>
                                <div style={styles}>
                                    <i className="fas fa-magic" style={{ color: 'white', padding: '23px', fontSize: '25px' , textAlign:'center' }} />
                                </div>
                                <p><strong>WEB DESIGN</strong></p>
                                <p>We have created the new macbook psd version with scalable vector shapes.</p>
                            </div>
                        </Col>
                        <Col sm="4" md="4">
                            <div style={{ display: 'grid',textAlign: 'center', justifyContent: 'center'}}>
                                <div style={styles}>
                                    <i className="far fa-smile-beam" style={{ color: 'white', padding: '23px', fontSize: '25px' }} />
                                </div>
                                <p><strong>RESPONSIVE</strong></p>
                                <p>We have created the new macbook psd version with scalable vector shapes.</p>
                            </div>
                        </Col>
                    </Row>


                    <Row sm="12">
                        <Col sm="4" md= "4">
                            <div style={{  display: 'grid', justifyContent: 'center', textAlign:'center'}}>
                                <div style={styles}>
                                    <i className="far fa-gem" style={{ color: 'white', padding: '21px', fontSize: '25px' }} />
                                </div>
                                <p><strong>UNIQUE DESIGN</strong></p>
                                <p>We have created the new macbook psd version with scalable vector shapes.</p>
                            </div> 
                        </Col>
                        <Col sm="4" md="4">
                            <div style={{display:'grid', justifyContent:'center', textAlign:'center' }}>
                                <div style={styles}>
                                    <i className="fas fa-layer-group" style={{ color: 'white', padding: '23px', fontSize: '25px' , textAlign:'center' }} />
                                </div>
                                <p><strong>DEMOS LAYOUT</strong></p>
                                <p>We have created the new macbook psd version with scalable vector shapes.</p>
                            </div>
                        </Col>
                        <Col sm="4" md="4">
                            <div style={{ display: 'grid',textAlign: 'center', justifyContent: 'center'}}>
                                <div style={styles}>
                                    <i className="fas fa-cut" style={{ color: 'white', padding: '23px', fontSize: '25px' }} />
                                </div>
                                <p><strong>CLEAN CODE</strong></p>
                                <p>We have created the new macbook psd version with scalable vector shapes.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                    
            </div>
        )
    }
}

export default about_story;