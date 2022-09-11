import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
    FormControl, InputLabel, Select, MenuItem, 
    Typography, Rating, Box, Card, Grid 
  } from "@mui/material"

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useEffect } from 'react';



const ProductDetails = ({ product, products }) => {
    console.log(product)
    const { image, name, details, price, 
        quantitySize6, quantitySize7, quantitySize8,
        quantitySize9, quantitySize10, quantitySize11, 
        quantitySize12
} = product;
    const [index, setIndex] = useState(0);

    const [sizes, setSizes] = useState([
       6, 7, 8, 9, 10, 11, 12 
    ])

    const [sizesArray, setSizeArray] = useState([
        quantitySize6, quantitySize7, quantitySize8,
        quantitySize9, quantitySize10, quantitySize11, 
        quantitySize12
    ])

    // useeffect to calc if 


    const [sizeSelected, setSizeSelected] = useState(8)

    const handleChange = (event) => {
        setSizeSelected(event.target.value)
    }

    const sizeRows = sizes.map((size, index)=> {
       return (sizesArray[index] > 0 && 
       <MenuItem key={size} value={size}>
            {size}
        </MenuItem>)
    })

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
                {/* TODO: size to affect stock */}
                <FormControl style={{minWidth: 300, textAlign:"center", padding: 10}}>
                <InputLabel id="demo-simple-select-label" style={{padding: 10}}>Choose Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="selectSize"
                        value={sizeSelected}
                        label="Select Size"
                        onChange={handleChange}
                    >
                        {sizeRows}
                    </Select>
                </FormControl>
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