import React from 'react'
import { product } from '../product'

function Description() {
  return (
    <p style={{textAlign:"center"}}>
        {product.description}
    </p>
  )
}

export default Description