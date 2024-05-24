import React from 'react'
import Logs from '../Images/bgg.png';
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
        <div className="container-fluid foots">
            <div className="container">
                <div className="row p-4">
                    <div className="col-12 col-lg-4 py-3">
                        <img className='footer-logo' src={Logs} alt="" />
                        <div className='mt-5'>
                            <h6 style={{color:'violet'}}>estd 9000</h6>
                            <h6 style={{color:'violet'}}>All over india</h6>
                            <h6 style={{color:'violet'}}>contact:+9123456778</h6>
                            <h6 style={{color:'violet'}}>email:abc@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8858977182094!2d76.0716806!3d11.0471808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64b0a6230de29%3A0x74939715906e4262!2sTecnavis%20Web%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716023730997!5m2!1sen!2sin" width={"80%"} height={'80%'} style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-12 col-lg-4 text-light montserrat-400 " style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                       <div>
                       <h4 style={{color:'black'}}>GO TO</h4>
                        <ul style={{listStyle:'none'}}>
                           <Link style={{textDecoration:'none'}} to={'/'}> <li style={{color:'violet'}}><b>Home</b></li></Link>
                           <Link style={{textDecoration:'none'}} to={'/aboutus'}> <li style={{color:'violet'}}><b>About us</b></li></Link>
                           <Link style={{textDecoration:'none'}} to={'/menu'}> <li style={{color:'violet'}}><b>Menu</b></li></Link>
                            
                        </ul>
                       </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer