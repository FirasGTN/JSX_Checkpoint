import React from 'react'
import { product } from '../product'

function Image() {
    return (
        <>
    <img src={product.image} alt="testt" className='PImage' />
    </>
  )
}

export default Image