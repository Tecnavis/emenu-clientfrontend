import React from 'react';
import Nav from './Nav';
import { Row,Col,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Client.css';
import banner1 from '../Images/ELET_01.jpg';
import blog from '../Images/Blog.png';
import banner2 from '../Images/ELET_02.jpg';
import Footer from './Footer';
// import Collection from './Gift';
import Gift from './Gift';


function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900, // Slide transition speed in milliseconds
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Slide transition interval in milliseconds
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768, // Adjust settings for smaller screens if needed
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };
    return (
        <div>
            <Nav/>
            
                <div>
                    <Slider {...settings}>
                        <div>
                            <img className='banner-style' src={banner1} alt="Slide 1"  />
                        </div>
                        <div>
                            <img className='banner-style' src={banner2} alt="Slide 2" />
                        </div>
                        <div>
                            <img className='banner-style'  src={banner1} alt="Slide 3" />
                        </div>
                    </Slider>
                </div>
                {/* <Container>
                    <Row>
                        <Col md={3}><h4>pendent</h4></Col>
                        <Col md={3}><h4>ring</h4></Col>
                        <Col md={3}><h4>bracelet</h4></Col>
                        <Col md={3}><h4>earing</h4></Col>
                    </Row>

                </Container> */}
                <div className="p2">
                    <Row>
                        <Col md={6}>
                            <div  style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',fontStyle:'italic',marginTop:'8rem'}}>
                                <p><b>Jewellery Designing</b></p>
                                <p style={{color:'brown'}}>
                                Jewellery is a type of accessory that humans have used to adorn their bodies for centuries. The first jewellery was most likely crafted from readily available raw materials. Like bone and wood. With the discovery of precious metals, like gold and silver, ancient individuals began to create beautiful and ornate jewellery.
                                </p>
                                <Link to='products'><button className='explore-btn'  style={{width:'100%'}}><p className='montserrat-300 m-0'>see all jewellery</p></button>{' '}</Link>

                            </div>
                        </Col>
                        <Col md={6}>

                        </Col>

                    </Row>
                    
                    
                </div>
            
                <div className="container-fluid banner-4 bg-light">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-lg-5 col-12">
                                <img style={{width:'100%', height:'100%'}} src={blog} alt="" />
                            </div>
                            <div className="col-12 col-lg-7">
                                <h1 className='montserrat-400'>About Us</h1>
                                <p>
                                These are several different means to adorn a certain body part. Earrings are meant to adorn the ears, for instance, and necklaces are meant to adorn the neck. Some other types of jewellery include bracelets, anklets, rings, brooches, pins, and body jewellery. Jewellery design is the art of the designing and creating of jewellery. This is one of civilization’s earliest forms of decoration, dating back at least seven thousand years to the oldest known human societies in Mesopotamia and Egypt. The art has taken many forms throughout the centuries, from the simple beadwork of ancient times to the sophisticated metal working and gem cutting known in modern day. Courses will impart knowledge about different types of stones, design themes, presentations, jewellery coasting and jewellery making some of the course use computer aided programs for designing jewellery and accessories.Enjoy the convenience to buy gold online in Kerala! Our collection features a wide range of beautiful and high-quality pieces that are sure to suit your style and budget. Whether you’re looking for a special piece of diamond jewellery for a special occasion or simply want to add to your collection, we have something for everyone. Experience the best in diamond jewellery and gold shopping with SAFA Jewellery. Shop now!
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='Container'>
                    <Gift/>
                </div>
            <Footer/>
        </div>
    );
}

export default Home;
