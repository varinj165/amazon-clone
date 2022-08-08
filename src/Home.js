import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
        src='https://images-na.ssl-images-amazon.com/images/I/81wlwDzOEWL._RI_.jpg' alt=''/>

        <div className='home__row'>
          <Product />
          {/** Product */}
        </div>

        <div className='home__row'>
          {/** Product */}
          {/** Product */}
          {/** Product */}
        </div>

        <div className='home__row'>
          {/** Product */}
        </div>
      </div>
    </div>
  )
}

export default Home
