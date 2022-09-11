import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className='hero-banner-container'>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h3>{heroBanner.largeText}</h3>
        {/* <img src='./crypto_scoper_logo.png' alt='shoes' */}
        <img src={urlFor(heroBanner.image)} alt='shoes'
        className='hero-banner-image'
        />
        <Link href={`/product/${heroBanner.product}`}>
          <button type='button'>
            {heroBanner.buttonText}
          </button>
        
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </>

  )
}

export default HeroBanner