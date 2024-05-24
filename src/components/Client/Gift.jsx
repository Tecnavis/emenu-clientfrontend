import React from 'react'
import {Row,Col, CardBody, Card } from 'react-bootstrap'
import img1 from '../Images/Wedding.jpg';
import img2 from '../Images/Birthday.jpg';
import img3 from '../Images/New-Born.jpg';
import img4 from '../Images/ann.jpg';
import img5 from '../Images/Graduation.jpg';
import img6 from '../Images/Engagement.jpg';




const Gift = () => {
  return (
    <div>
        <Row>
            {/* <Col md={4} className='gft' style={{display:"grid",justifyContent:"center",alignItems:"center",color:'white'}}>
                <h1 ><b>Celebrate your precious milestone with us!</b></h1>
                
                
            </Col> */}
            <Col md={4} className='gft'>
                <div className="overlay-main">
                    <h1 className="overlay-texty"><b>Celebrate your precious milestone with us!<br></br>GIFT YOUR LOVED ONES</b></h1>
                </div>
            </Col>
            <Col md={8}>
                <Row md={3}>
                    <Card>
                        <CardBody className="card-body">
                            <div className="image-container">
                            <img src={img3} alt="img" className="card-img" />
                            <div className="overlay">
                                <div className="overlay-text">NewBorn</div>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="card-body">
                            <div className="image-container">
                            <img src={img2} alt="img" className="card-img" />
                            <div className="overlay">
                                <div className="overlay-text">Birthday</div>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="card-body">
                            <div className="image-container">
                            <img src={img5} alt="img" className="card-img" />
                            <div className="overlay">
                                <div className="overlay-text">Graduation</div>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                </Row>
                <Row md={3}>
                    <Card>
                        <CardBody className="card-body">
                            <div className="image-container">
                            <img src={img6} alt="img" className="card-img" />
                            <div className="overlay">
                                <div className="overlay-text">Engagement</div>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="card-body">
                            <div className="image-container">
                            <img src={img1} alt="img" className="card-img" />
                            <div className="overlay">
                                <div className="overlay-text">wedding</div>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody className="card-body">
                            <div className="image-container">
                            <img src={img4} alt="img" className="card-img" />
                            <div className="overlay">
                                <div className="overlay-text">Anniversary</div>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                </Row>
            </Col>

        </Row>
    </div>
  )
}

export default Gift