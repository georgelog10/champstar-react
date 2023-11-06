import React from 'react'
import './DashboardCards.css'
import TestImage from '../../../assets/mohamed-nohassi--0xMiYQmk8g-unsplash.jpg'
import { Card, Row, Col, CardImg, CardText, CardTitle, Button, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCity, faPerson } from '@fortawesome/free-solid-svg-icons';

const DashboardCards = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

  return (
    <section id='dashboard-cards'>
        <Row xs={1} md={3} className="g-4 cards-row">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
            <Card>
                <Card.Body>
                    <CardImg variant="top" src={TestImage} className='card-image'></CardImg>
                    <CardTitle className='card-title'>Title</CardTitle>
                    <CardText className='deadline'>Termen de înscriere: xx.xx.xxxx</CardText>
                    <CardText className='city'><FontAwesomeIcon icon={faCity} /> Oraș</CardText>
                    <CardText className='domain'><FontAwesomeIcon icon={faBriefcase} /> Domeniu</CardText>
                    <CardText className='participants-number'><FontAwesomeIcon icon={faPerson} /> Număr de participanți</CardText>
                </Card.Body>
                <Card.Footer className='card-footer'>
                    <Button variant="primary" className='sign-up-button'>Vezi detalii</Button>
                </Card.Footer>
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

export default DashboardCards