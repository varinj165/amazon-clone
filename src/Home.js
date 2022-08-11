import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
        alt=''/>

        <div className='home__row'>
          <Product
          id='12334516'
          title='Sony PS5 Playstation 5 Disc Version Console Horizon Forbidden West Bundle - 16GB GDDR6 Memory, 825GB SSD, 4K Blu-ray Player, WiFi 6, Bluetooth 5.1, Ethernet, HDR, 4K-TV Gaming, Tempest 3D AudioTech' 
          price={1049.99}
          image='https://i5.walmartimages.com/asr/0d1fcf9b-de30-40d7-8837-38c60903e659.1af8014cee0a90440901985d1d2f3875.jpeg'
          rating={5}
          />
          <Product
          id='83475088'
          title='2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone and iPad; Starlight​' 
          price={1184.99}
          image='https://i5.walmartimages.com/asr/bd5e549b-96f7-4b2d-99b5-c93819c854ed.da6cdb6bd48bf1b92060a308f2f49c2f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
          rating={5}
          />
        </div>

        <div className='home__row'>
          <Product
          id='34560399'
          title='"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
          price={98.99}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
          rating={3}
          />
          <Product
          id='22230467'
          title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
          price={598.99}
          image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
          rating={5}
          />
          <Product
          id='59237622'
          title='Spigen Ultra Hybrid [Anti-Yellowing Technology] Designed for iPhone 13 Pro Case (2021) - Crystal Clear' 
          price={12.34}
          image='http://cdn.shopify.com/s/files/1/0808/0067/products/title_ip13pro_uh_midnight_green_1200x1200.jpg?v=1648835658'
          rating={4}
          />
        </div>

        <div className='home__row'>
          <Product
          id='23464212'
          title='Autobiography of a Yogi (Self-Realization Fellowship)' 
          price={8.99}
          image='https://images-na.ssl-images-amazon.com/images/I/61a7pBptqCL.jpg'
          rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
