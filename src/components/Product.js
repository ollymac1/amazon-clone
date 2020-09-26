import React from 'react';
import '../styles/Product.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './context/basket/StateProvider';

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	console.log('This is the basket -->', basket);
	const addToBasket = () => {
		//dispatch the item to the  data layer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>AED </small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon />
						))}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
