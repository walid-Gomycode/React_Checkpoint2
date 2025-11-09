import React from 'react'
import { product }  from '../product'

const Image = () => {
  return (
    <div>
        <img src={product.imgURL} alt={product.name} width={'250px'} />
    </div>
  )
}

export default Image