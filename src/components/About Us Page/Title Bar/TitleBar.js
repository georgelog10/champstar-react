import React from 'react'
import './TitleBar.css'

const TitleBar = () => {
  return (
    <section className='d-flex about-us-title-bar'>
      <div className="d-flex flex-column justify-content-end pb-3 pb-lg-5 px-4 container">
        <div className='text-white about-us-text'>
            <h1 className='h4 mb-4 text-uppercase fw-bolder'>Despre noi</h1>
            <p className='display-1 lh-1'>Inspirăm excelența <br/>studenților</p>
        </div>
      </div>
    </section>
  )
}

export default TitleBar