import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div>
      <Link href={`/product`}>
        <div className='product-card'>
          Product
          <img 
            src='./crypto_scoper_logo.png'
            className='product-image'
            width={250}
            height={250}
          />
          <p className='product-name'>Product Name</p>
          <p className='product-price'>$Product Price</p>
        </div>
      </Link>
    </div>
  )
}

export default Product