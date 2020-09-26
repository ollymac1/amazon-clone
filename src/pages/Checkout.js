import React from 'react';
import Subtotal from '../components/Subtotal';
import '../styles/Checkout.css';

function Checkout() {
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<div className='checkout__title'>
					<h2>Shopping Cart</h2>
				</div>
			</div>

			<div className='checkout__right'>
				<Subtotal />

				{/* Basket Item */}
				{/* Basket Item */}
				{/* Basket Item */}
				{/* Basket Item */}
				{/* Basket Item */}
			</div>
		</div>
	);
}

export default Checkout;
