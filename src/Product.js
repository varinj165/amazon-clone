import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Dyson V8 Absolute Vacuum</p>
        <p className='product__price'>
            <small>$</small>
            {/** Make price bold */}
            <strong>399.99</strong>
        </p>

        <div className='product__rating'>
          <p>⭐️</p>
        </div>
      </div>

      <img src='https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/214730-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=640' alt=''/>

      <button>Add to Basket</button>
    </div>
  )
}

export default Product
