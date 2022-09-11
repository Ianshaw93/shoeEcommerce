import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';


const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img 
                    src={urlFor(image && image[0])} 
                    className="product-detail-image" 
                    />
                </div>
            </div>
        <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
                <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <p>
                    (20)
                </p>
                </div>
                <h4>Details: </h4>
                <p>{details}</p>
                <p className="price">${price}</p>
                {/* is quantity needed? */}
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                    <span className="minus" ><AiOutlineMinus /></span>
                    <span className="num">0</span>
                    <span className="plus" o><AiOutlinePlus /></span>
                    </p>
                </div>
                {/* TODO: add size selector */}
                <div className="buttons">
                    <button type="button" className="add-to-cart" >Add to Cart</button>
                    <button type="button" className="buy-now" >Buy Now</button>
                </div>
            </div>
        </div>
        // Product
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    
    console.log(product);
    
    return {
        props: { products, product }
    }
    }

export default ProductDetails