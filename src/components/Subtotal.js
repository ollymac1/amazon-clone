import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './context/basket/StateProvider';
import { getBasketTotal } from './context/basket/reducer';

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={0}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeperator={true}
				prefix={'AED '}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
