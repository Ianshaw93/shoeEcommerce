import React from 'react'
import { FooterBanner, HeroBanner, Product } from '../components'

import { client } from '../lib/client'
// import { Product, FooterBanner, HeroBanner, Cart, Navbar, Hero, Footer } from '../components'


const Home = ({ products, bannerData }) => {
  return (
    <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
         {console.log("bannerData: ", bannerData)} 
        Placeholder
        <div className='products-heading'>
          <h2>Best Selling Products</h2>
          <p>Shoes in trend this season</p>
        </div>
        <div className='products-container'>
          {products?.map((product) => 
          <Product 
          key={product._id} 
          product={product} 
          />
          )}
          {/* {['Product 1', 'Product 2'].map((product) => product)} */}

        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]}/> 
    </>
  )
}

export const getServerSideProps = async () => {
  // sanity query: fetch all products from dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home