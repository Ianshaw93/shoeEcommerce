import React from 'react'
import { Footer, FooterBanner, HeroBanner } from '../components'

// import { Product, FooterBanner, HeroBanner, Cart, Navbar, Hero, Footer } from '../components'


const Home = () => {
  return (
    <>
        <HeroBanner/> 
        Placeholder
        <div className='products-heading'>
          <h2>Best Selling Products</h2>
          <p>Shoes in trend this season</p>
        </div>
        <div className='products-container'>
          {['Product 1', 'Product 2'].map((product) => product)}

        </div>

        <FooterBanner/> 
    </>
  )
}

// export const getServerSideProps = async () => {
//   const query = 
// }
export default Home