import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class Professional extends Component {

    professional = [{
        detail : {
            date1 : '2015 - 2017',
            heading1 : 'HTML5 AND CSS3 DEVELOPER',
            paragraph1 : 'Market Network',
            paragraph2 : 'San Francisco, California, USA',
            paragraph3 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) ',

            date2 : '2017 - 2019',
            heading2 : 'ANGULAR AND REACT DEVELOPER',
            paragraph4 : 'Market Network',
            paragraph5 : 'San Francisco, California, USA',
            paragraph6 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam (...) ',
            
        }
    }]
    render() {

        let styl = {
            fontSize: '13px',
            lineHeight: '25px',
            
        }

        var prof = this.professional.map( (obj) => {
            return(
                <div style={{height: '40%', marginTop:'40px', backgroundColor:'white', paddingTop : '25px'}}>
                    <Container>
                         <h5><strong>PROFESSIONAL</strong></h5>
                         <hr/>
                         <Row>
                             <Col sm="3">
                                 <p><strong>{obj.detail.date1}</strong></p>
                             </Col>
                             <Col sm="9">
                               <p><strong>{obj.detail.heading1}</strong></p>
                               <p  style = {styl}>{obj.detail.paragraph1}</p>
                               <p  style = {styl}>{obj.detail.paragraph2}</p>
                               <p  style = {styl}>{obj.detail.paragraph3}</p>
                             </Col>
                         </Row>
                         <hr/>
                         <Row>
                             <Col sm="3">
                                 <p><strong>{obj.detail.date2}</strong></p>
                             </Col>
                             <Col sm="9">
                               <p><strong>{obj.detail.heading2}</strong></p>
                               <p  style = {styl}>{obj.detail.paragraph4}</p>
                               <p  style = {styl}>{obj.detail.paragraph5}</p>
                               <p  style = {styl}>{obj.detail.paragraph6}</p>
                             </Col>
                         </Row>
                    </Container>
                </div>
            )
        })

        return(
            <div>
                {prof}
            </div>
        )
    }
}

export default Professional;