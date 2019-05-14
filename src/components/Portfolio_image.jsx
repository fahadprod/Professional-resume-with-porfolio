import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import ReactDOM from 'react-dom';
// import Gallery_img from './Gallery_img.jsx';

class Port extends Component {

     photos = [

        {src1: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
        src2: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
        src3: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
        src4: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
        src5: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
        src6: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
        src7: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
        src8: 'https://source.unsplash.com/PpOHJezOalU/800x599',
        src9: 'https://source.unsplash.com/I1ASdgphUH4/800x599'}
      ];
      
      
        
        render(){

          var img = this.photos.map( (obj) => {
            return(
            

                <Container style={{marginBottom:'20px'}}>
                  <Row className="gallery-grid">
                    <Col sm={4}>
                       
                    <div class="box13">
                        <img src={obj.src1}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>


                          <div class="box13">
                        <img src={obj.src2}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="box13">
                        <img src={obj.src3}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div> 
                        
                    </Col>
                    <Col sm={4}>

                    <div class="box13">
                        <img src={obj.src4}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="box13">
                        <img src={obj.src5}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="box13">
                        <img src={obj.src6}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                       
                    </Col>
                    <Col sm={4}>

                    <div class="box13">
                        <img src={obj.src7}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="box13">
                        <img src={obj.src8}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="box13">
                        <img src={obj.src9}/>
                        <div class="box-content">
                            <h3 class="title">Williamson</h3>
                            <span class="post">Web Designer</span>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                       
                    </Col>
                    
                  </Row>
                </Container>
               
            )
           
          })
          return(
            <div>{img}</div>
          )
        }
      }
      

export default Port;