import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({ basket?.length } items):
                    <strong> { value } </strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift
                </small>
            </>
        )}

        decimalScale={2}
        value={ sum (basket) }
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button> Proceed to Checkout </button>
    </div>
  )
}

// Sum up prices of all items in basket
function sum(listBasket) {
  let res = 0;

  for (let i = 0; i < listBasket.length; ++i) {
    res += listBasket[i].price;
  }

  return res;
}

export default Subtotal
