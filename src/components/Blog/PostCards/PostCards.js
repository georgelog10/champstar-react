import React, { useState, useEffect } from 'react'
import './PostCards.css'
import {db} from '../../../config/fire';
import { getDocs, collection } from 'firebase/firestore';
import { Row, Card, Col, Pagination, CardImg, CardTitle, CardText, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const PostCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        //get all the items but offset the last one
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).reverse().slice(1);
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <section className='col-lg-9 post-cards-section'>
      {/* if there are no items display a message else make the rows*/}
      {!data.length ? (
        <div class="alert alert-warning d-flex align-items-center gap-2" role="alert">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <div>
            Nu există articole
          </div>
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4 cards-row">
        {data.map(item => (
          <Col key={item.id}>
            <Card className='position-relative border-0'>
              <Card.Body className='position-absolute w-100 p-4'>
                <div className='d-flex justify-content-between post-card-meta'>
                  <CardText className='mb-2 text-uppercase text-white text-opacity-75 post-card-category'>{item.category}</CardText>
                  <CardText className='mb-2 text-uppercase text-white text-opacity-75 post-card-author'><FontAwesomeIcon icon={faUser}/> {item.author}</CardText>
                </div>
                <CardTitle className='text-white post-card-title'>{item.name}</CardTitle>
                <Button variant="primary" className='sign-up-button'>Citește articolul <FontAwesomeIcon icon={faArrowRight}/></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      )}
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