import React, { Component } from 'react';
import { Container, Col, Row, Progress, Collapse, Card, CardBody } from 'reactstrap';

class Skills extends Component {

    data = [{
        skill: {
            one: 'HTML5',
            two: 'CSS3',
            three: 'JavaScript',
            four: 'React Js'
        }
    }];

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    

    render () {

        var response = this.data.map( (obj, index) => {
            return(
                <div key={index}>
                    <br/>
                    <br/>
                    <h5><strong>Skills</strong></h5>
                    <hr/>

                    <Container>
                        <Row sm="12">
                            <Col sm="4">
                                <p><i className="fas fa-plus fas1" onClick={this.toggle} /> {obj.skill.one}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={90} />
                            </Col>
                            <Collapse isOpen={this.state.collapse}>
                              <Card>
                                 <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                  </CardBody>
                               </Card>
                            </Collapse>

                        </Row>

                        <br/>

                        <Row sm="12">
                            <Col sm="4">
                                <p><i className="fas fa-plus fas1"  onClick={this.toggle}/> {obj.skill.two}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={80} />
                            </Col>

                            <Collapse isOpen={this.state.collapse}>
                              <Card>
                                 <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                  </CardBody>
                               </Card>
                            </Collapse>
                        </Row>

                        <br/>

                        <Row sm="12">
                            <Col sm="4">
                                <p><i className="fas fa-plus fas1" onClick={this.toggle}/> {obj.skill.three}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={65} />
                            </Col>

                            <Collapse isOpen={this.state.collapse}>
                              <Card>
                                 <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                  </CardBody>
                               </Card>
                            </Collapse>
                        </Row>

                        <br/>

                        <Row sm="12" style={{marginBottom:'50px'}}>
                            <Col sm="4">
                                <p><i className="fas fa-plus fas1" onClick={this.toggle}/> {obj.skill.four}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={60} />
                            </Col>

                            <Collapse isOpen={this.state.collapse}>
                              <Card>
                                 <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                                  </CardBody>
                               </Card>
                            </Collapse>
                        </Row>
                    </Container>
                </div>
            )
        });

        return(
            <div>{response}</div>
        )
        
    }
}

export default Skills;