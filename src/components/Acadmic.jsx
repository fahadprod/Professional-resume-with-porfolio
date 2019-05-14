import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class Acadmic extends Component {

    acadmice = [{
        acadmic : {
            date1 : '2015 - 2017',
            heading1 : 'ADP WITH COMPUTER SCIENCE',
            paragraph1 : 'Computer Programming',
            paragraph2 : 'Superior University',
            paragraph3 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) ',

            date2 : '2017 - 2019',
            heading2 : 'MSCIT INFORMATION TECHNOLOGY',
            paragraph4 : 'DEEP LEARNING',
            paragraph5 : 'University Of Education',
            paragraph6 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) ',
            
        }
    }]
    render() {

        let styl = {
            fontSize: '13px',
            lineHeight: '25px',
            
        }

        var acad = this.acadmice.map( (obj) => {
            return(
                <div style={{height: '40%', marginTop:'40px', backgroundColor:'white', paddingTop : '25px'}}>
                    <Container>
                         <h5><strong>ACADEMIC BACKGROUND</strong></h5>
                         <hr/>
                         <Row>
                             <Col sm="3">
                                 <p><strong>{obj.acadmic.date1}</strong></p>
                             </Col>
                             <Col sm="9">
                               <p><strong>{obj.acadmic.heading1}</strong></p>
                               <p  style = {styl}>{obj.acadmic.paragraph1}</p>
                               <p  style = {styl}>{obj.acadmic.paragraph2}</p>
                               <p  style = {styl}>{obj.acadmic.paragraph3}</p>
                             </Col>
                         </Row>
                         <hr/>
                         <Row>
                             <Col sm="3">
                                 <p><strong>{obj.acadmic.date2}</strong></p>
                             </Col>
                             <Col sm="9">
                               <p><strong>{obj.acadmic.heading2}</strong></p>
                               <p  style = {styl}>{obj.acadmic.paragraph4}</p>
                               <p  style = {styl}>{obj.acadmic.paragraph5}</p>
                               <p  style = {styl}>{obj.acadmic.paragraph6}</p>
                             </Col>
                         </Row>
                    </Container>
                </div>
            )
        })

        return(
            <div>
                {acad}
            </div>
        )
    }
}

export default Acadmic;