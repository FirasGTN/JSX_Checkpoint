import React from 'react'
import { product } from '../product'

function Price() {
  return (
    <p  className='price' >
        {product.price}
    </p>
  )
}

export default Price