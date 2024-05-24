import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from './Client/Home'
import Aboutus from './Client/Aboutus'
import Viewdetails from './Client/Viewdetails'
import Products from './Client/Products'
function MainRouter() {
  return (
    <div>
      <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="aboutus" element={<Aboutus />} />
              <Route path="/view-details" element={<Viewdetails />} />           

            </Route>
      </Routes>
    </div>
  )
}

export default MainRouter