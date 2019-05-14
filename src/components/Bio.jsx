import React, { Component } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
 

class Bio extends Component {

    data = [{
        bio : {
            paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.',
            paragraph2 : 'Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. ',
            paragraph3 : 'Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus.',

            one : 'HTML5',
            two : 'REACT JS',
            three: 'CSS3',
            four : 'SASS',

        }
    }]


    render () {

        let styl = {
            fontSize: '13px',
            lineHeight: '25px',
            
        }

        var result = this.data.map( (obj) => {
            let styles = {
                fontSize: '15px'
            }
            return(
                <div style={{height:'50%', backgroundColor: 'white', padding: '25px', width:'100%'}}>
                    <h5 style={{marginTop:'15px'}}><strong>BIO & SKILLS</strong></h5>
                    <hr/>

                    <p style={styl} >{obj.bio.paragraph1}</p>
                    <p style={styl}>{obj.bio.paragraph2}</p>
                    <p style={styl}>{obj.bio.paragraph3}</p>

                    <br/>
                    <br/>
                    <br/>
                    <h5><strong>HARD SKILLS</strong></h5>
                    <br/>
                    <Container>
                        <Row><p style={styl}><strong>PROGRAMMING</strong></p></Row>
                        
                        <Row sm="12">
                        <Col sm="4">
                                <p><i className="fas fa-plus fas1" /> {obj.bio.one}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={90} />
                            </Col>
                        </Row>
                        <br/>
                        
                        <Row sm="12">
                        <Col sm="4">
                                <p><i className="fas fa-plus fas1" /> {obj.bio.two}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={70} />
                            </Col>
                        </Row>

                       <br/>
                       <h5><strong>SOFT SKILLS</strong></h5>
                       <br/>
                    
                        <Row><p style={styl}><strong>DESIGNING</strong></p></Row>
                        
                        <Row sm="12">
                        <Col sm="4">
                                <p><i className="fas fa-plus fas1" /> {obj.bio.three}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={90} />
                            </Col>
                        </Row>
                        <br/>
                        
                        <Row sm="12" style={{marginBottom:'40px'}}>
                        <Col sm="4">
                                <p><i className="fas fa-plus fas1" /> {obj.bio.four}</p>
                            </Col>
                            <Col sm="8">
                               <Progress striped color="info" value={86} />
                            </Col>
                        </Row>
                    </Container>

                    
                </div>
            )
        });
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default Bio;