import React, { Component } from 'react';
import {Container, Row, Col, Button, Input, Form, FormGroup} from 'reactstrap';


class Contact extends Component {

    form = [{
        detail : {
            heading : 'CONTACT ME',
        },
        icon: {
            one : 'fas fa-mobile',
            two : 'fas fa-map-marker-alt',
            three : 'fas fa-envelope'
        },
        numb : {
            num: '+92 345 789',
            location : 'Lahore IT Tower Hafz-Center',
            mail: 'fahadahmadmd@gmail.com'
        }
    }];

    render () {
        let styles = {
            fontSize : '20px',
            padding: '10px',
            border: '1px solid lightGrey',
            borderRadius : '100%',
            width : '50px',
            marginLeft: '20px',
            textAlign: 'center',
            color: 'blue'
        }
        let styles1 = {
            fontSize : '20px',
            padding: '10px',
            border: '1px solid lightGrey',
            borderRadius : '100%',
            width : '50px',
            marginLeft: '50px',
            textAlign: 'center',
            color: 'blue'
        }
        let main = {
            margin : '20px',
            display: 'grid',
            justifyContent : 'center'
        }
        var contact = this.form.map( (obj) =>{
            return(
                <div>
            <h5 style={{marginTop:'20px'}}><strong>{obj.detail.heading}</strong></h5>
            <hr/>

            <Container>
                <Row>
                    <Col sm={4}>
                       <div style={main}>
                           <div style={styles}><i className={obj.icon.one}/></div>
                           <p style={{paddingTop:'10px'}}>{obj.numb.num}</p>
                       </div>
                    </Col>
                    <Col sm={4}>
                    <div style={main}>
                           <div style={styles1}><i className={obj.icon.two}/></div>
                           <p style={{paddingTop:'10px', fontSize: '12px', textAlign:'center'}}>{obj.numb.location}</p>
                       </div>
                    </Col>
                    <Col sm={4}>
                    <div style={main}>
                           <div style={styles1}><i className={obj.icon.three}/></div>
                           <p style={{paddingTop:'10px', fontSize: '12px', textAlign:'center'}}>{obj.numb.mail}</p>
                       </div>
                    </Col>
                </Row>
            </Container>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13605.684162787991!2d74.34114!3d31.512594!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1548073841728" width="100%" height="450" frameborder="0" allowfullscreen></iframe>
            </div>
            <div style={{marginTop:'30px'}}>
                <h5><strong>E-mail</strong></h5>
                <hr/>

              
          
            <div>
              <Form>
                  <FormGroup>
                  <Input type="text" name="name" placeholder="Name"/>
                  </FormGroup>
                  
              <FormGroup>
              <Input type="email" name="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
              <Input type="text" name="text" placeholder="Subject" />
              </FormGroup>

              <FormGroup>
              <Input type="textarea" name="text" placeholder="Message" />
              </FormGroup>
              <FormGroup>
              <Button color="primary">Send Me</Button>
              </FormGroup>
              </Form>
            </div>
          
            </div>
            </div>
            )
        });
        return(
            <div>{contact}</div>
        )
    }
}

export default Contact;