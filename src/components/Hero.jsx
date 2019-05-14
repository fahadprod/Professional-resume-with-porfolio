import React, { Component } from 'react';
import {
  Table,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";


class hero extends Component{
     
    data = [
        {
            detail: {
                Name: 'Fahad Ahmad',
                Age: '20',
                Location: 'Lahore',
                Experience: '1 year',
                Degree : 'MSCIT',
                Career : 'Mid-Level',
                Phone: '123_456_ 789',
                Email:'fahadahmadmd@gmail',
                Website: 'www.example.com'
            }
        }]


    render (){

        let styles = {
            fontSize: '12px'
        }

        var result = this.data.map( (obj, index) =>{
            return (

                <div style={{marginTop:'15px'}} key={index}>
                    <h5 style={{fontSize:'100%'}}><strong>PROFESSIONAL DETAIL</strong></h5>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{ width: '100%' }}
                    />
                    <Table responsive>
                        <tbody style = {styles}>
                            <tr>

                                <th>NAME</th>
                                <td>{obj.detail.Name}</td>
                            </tr>
                            <tr>

                                <th>AGE</th>
                                <td>{obj.detail.Age}</td>
                            </tr>
                            <tr>
                                <th>LOCATION</th>
                                <td>{obj.detail.Location}</td>
                            </tr>
                            <tr>
                                <th>EXPERIENCE</th>
                                <td>{obj.detail.Experience}</td>
                            </tr>
                            <tr>
                                <th>DEGREE</th>
                                <td>{obj.detail.Degree}</td>
                            </tr>
                            <tr>
                                <th>CAREER-LEVEL</th>
                                <td>{obj.detail.Career}</td>
                            </tr>
                            <tr>
                                <th>PHONE</th>
                                <td>{obj.detail.Phone}</td>
                            </tr>
                            <tr>
                                <th>EMAIL</th>
                                <td>{obj.detail.Email}</td>
                            </tr>
                            <tr>
                                <th>WEBSITE</th>
                                <td>{obj.detail.Website}</td>
                            </tr>
                            
                            
                            
                        </tbody>
                    </Table>
                    <h5><strong>Attachment</strong></h5>
                    <hr/>
                    <p style={{ border: '1px solid grey', backgroundColor: 'lightgrey', width: '100%', cursor :'pointer' }}>
                        <i className="fas fa-file-pdf" style={{ color: 'red', fontSize: '23px', padding:'10px' }} />
                        <strong style={{color:'blue'}}>Curriculum.pdf</strong>
                        <i className="far fa-eye" style={{color:'blue', marginLeft:'35px'}}/>
                        <i className="fas fa-cloud-download-alt" style={{ color: 'blue', marginLeft: '7px' }}/>
                    </p>

                    <p style={{ border: '1px solid grey', backgroundColor: 'lightgrey', width: '100%', cursor : 'pointer' }}>
                        <i className="fas fa-file-word" style={{ color: 'blue', fontSize: '23px', padding: '10px' }} />
                        <strong style={{ color: 'blue' }}>Curriculum.pdf</strong>
                        <i className="far fa-eye" style={{ color: 'blue', marginLeft: '35px' }} />
                        <i className="fas fa-cloud-download-alt" style={{ color: 'blue', marginLeft: '7px' }} />
                    </p>

                    <Table>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                            </tr>


                            <h5><strong>Social Profile</strong></h5>

                            <tr style={{ fontSize: '30px'}}>
                                <td>
                                <a href="https://www.facebook.com/profile.php?id=100007545195931" target="_blank"><i className="fab fa-facebook" style={{color:'#3b5998'}}/></a> 
                                <a href="https://twitter.com/FahadAh0516" target="_blank"><i className="fab fa-twitter" style={{color:'#55acee', marginLeft:'25px'}}/></a>
                                <a href="https://www.linkedin.com/in/fahad-ahmad-113906157/" target="_blank"><i className="fab fa-linkedin" style={{color:'#0077b5', marginLeft:'25px'}}/></a>
                                <a href="https://plus.google.com/u/0/100753158571677385153" target="_blank"><i className="fab fa-google-plus" style={{color:'#d34836', marginLeft:'25px'}}/></a>
                                </td>
                                
                            </tr>

                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                            <h5><strong>Contact Me</strong></h5>

                            <tr>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </Table>

                     <Form>
        <FormGroup row>
          
          <Col sm={12}>
            <Input type="email" name="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          
          <Col sm={12}>
            <Input type="text" name="text" placeholder="Subject" />
          </Col>
        </FormGroup>
        <FormGroup row>
          
          <Col sm={12}>
            <Input type="textarea" name="text" placeholder="Message" />
          </Col>
        </FormGroup>
        <FormGroup style={{marginBottom:'30px'}}>
          <Col sm={{ size: 20 }}>
            <Button color="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
                </div>
            )
        })

        return (
            <div>{result}</div>
        )
        
        
    }
}

export default hero;



