import React from 'react'
import './PostCards.css'
import { Row, Card, Col, Pagination, CardImg, CardTitle, CardText, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const PostCards = () => {
  return (
    <section id='post-cards-section'>
        <Row xs={1} md={3} className="g-4 cards-row">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
            <Card>
                <Card.Body>
                    <div className='post-card-meta'>
                      <CardText className='post-card-category'>Categorie</CardText>
                      <CardText className='post-card-author'><FontAwesomeIcon icon={faUser}/> Autor</CardText>
                    </div>
                    <CardTitle className='post-card-title'>Title</CardTitle>
                    <Button variant="primary" className='sign-up-button'>Citește articolul <FontAwesomeIcon icon={faArrowRight}/></Button>
                </Card.Body>
            </Card>
            </Col>
            ))}
        </Row>
        <div>
        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  </div>
    </section>
  )
}

export default PostCards