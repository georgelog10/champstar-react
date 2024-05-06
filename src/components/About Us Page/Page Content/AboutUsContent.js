import React, {useState} from 'react'
import './AboutUsContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Modal, Row, Accordion } from 'react-bootstrap'
import { Typography } from '@mui/material'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AboutUsContent = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section>
        <div className="pt-5 pb-4 container">
            <div className='col-6 pb-5'>
                <h4 className='fw-bolder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
            </div>
            <div className='d-flex justify-content-end'>
              <div className='col-6 pb-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className='rounded-5 p-5 d-flex flex-column justify-content-end about-us-image'>
              <div className='d-flex justify-content-between align-items-center'>
                <Typography variant="p" className='fs-1 lh-1 mb-0 text-white'>Some text will <br/>appear here</Typography>
                <Button variant="primary" className="bg-white border-0 rounded-circle" onClick={() => setModalShow(true)}>
                  <FontAwesomeIcon icon={faArrowRight} className='text-dark'/>
                </Button>
              </div>
            </div>
            <div className='d-flex justify-content-end mt-5'>
              <div className='w-50 numbers'>
                <h3 className='fw-bolder mb-4'>Evoluția noastră</h3>
                <Row className='mb-4'>
                  <Col>
                    <Typography variant='p' className='fw-bolder mb-2'>Numbers Text</Typography>
                    <h1 className='fw-bolder number'>0</h1>
                  </Col>
                  <Col>
                    <Typography variant='p' className='fw-bolder mb-2'>Numbers Text</Typography>
                    <h1 className='fw-bolder number'>0</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Typography variant='p' className='fw-bolder mb-2'>Numbers Text</Typography>
                    <h1 className='fw-bolder number'>0</h1>
                  </Col>
                  <Col>
                    <Typography variant='p' className='fw-bolder mb-2'>Numbers Text</Typography>
                    <h1 className='fw-bolder number'>0</h1>
                  </Col>
                </Row>
              </div>
            </div>
            <div className='pt-5 our-vision'>
              <Row>
                <Col>
                  <h3 className='fw-bolder mb-4'>Viziunea noastră</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <Button>Test <FontAwesomeIcon icon={faArrowRight}/></Button>
                </Col>
                <Col>
                  <h3 className='fw-bolder mb-4'>FAQ</h3>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.</Accordion.Body>
                      </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </div>
        </div>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  )
}

export default AboutUsContent