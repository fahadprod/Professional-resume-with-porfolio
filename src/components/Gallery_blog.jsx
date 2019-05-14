import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Gallery extends Component{
    render() {
        return(
            <div>
                <h5 style={{marginTop:'20px'}}><strong>BLOG</strong></h5>
                <hr/>

                <Card style={{backgroundColor:'lightGrey'}}>
        <CardImg top width="100%" src="http://new.uouapps.com/remoticv/images/blog-img-1.jpg" alt="Card image cap" />
        <div><p style={{fontSize:'12px', padding:'20px'}}> <span> <i className="far fa-calendar"/>&nbsp;&nbsp;Aug 29, 2016</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-user"/>&nbsp; Admin</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-comments"/>&nbsp; Feature</span>
        </p></div>
        <CardBody>
          <CardTitle><strong>ENJOY THE SMALL THINGS</strong></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Read More <i className="fas fa-chevron-right"/></Button>
        </CardBody>
      </Card>
      <br/>

      <Card style={{backgroundColor:'lightGrey'}}>
        <CardImg top width="100%" src="http://new.uouapps.com/remoticv/images/blog-img-2.jpg" alt="Card image cap" />
        <div><p style={{fontSize:'12px', padding:'20px'}}> <span> <i className="far fa-calendar"/>&nbsp;&nbsp;Aug 29, 2016</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-user"/>&nbsp; Admin</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-comments"/>&nbsp; Feature</span>
        </p></div>
        <CardBody>
          <CardTitle><strong>ENJOY THE SMALL THINGS</strong></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Read More <i className="fas fa-chevron-right"/></Button>
        </CardBody>
      </Card>
      <br/>

      <Card style={{backgroundColor:'lightGrey', marginBottom:'30px'}}>
        <CardImg top width="100%" src="http://new.uouapps.com/remoticv/images/blog-img-3.jpg" alt="Card image cap" />
        <div><p style={{fontSize:'12px', padding:'20px'}}> <span> <i className="far fa-calendar"/>&nbsp;&nbsp;Aug 29, 2016</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-user"/>&nbsp; Admin</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-comments"/>&nbsp; Feature</span>
        </p></div>
        <CardBody>
          <CardTitle><strong>ENJOY THE SMALL THINGS</strong></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Read More <i className="fas fa-chevron-right"/></Button>
        </CardBody>
      </Card>




      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#">
            Prev
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#">
           Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>
            </div>
        )
    }
}

export default Gallery;