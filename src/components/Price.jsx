import React from 'react'
import { product }  from '../product'

const Price = () => {
  return (
    <div>
        <h3 style={{color:'blue'}}>{product.price}</h3>
    </div>
  )
}

export default Price