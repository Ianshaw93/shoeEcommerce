import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <>
      <div className='hero-banner-container'>
        <p className='beats-solo'>Latest Trends</p>
        <h3>Mid Text</h3>
        <img src='./crypto_scoper_logo.png' alt='shoes'
        className='hero-banner-image'
        />
        <Link href="/product/ID">
          <button type='button'>Button Text</button>
        
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>description</p>
        </div>
      </div>
    </>

  )
}

export default HeroBanner