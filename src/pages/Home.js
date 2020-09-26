import React from 'react';
import '../styles/Home.css';
import Product from '../components/Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/39/prime/XCM_Manual_1204610_GW_DesktopHero_Prime_refresh_3000x1200_2x_en_1575980307._CB426710655_.jpg'
					alt='Amazon Hero Banner for Prime Delivery'
				/>
				<div className='home__row'>
					<Product
						id='765876576'
						title='The Lean Startup Hardcover – Illustrated, 15 October 2011'
						price={'190'}
						image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg'
						rating={3}
					/>
					<Product
						id='765876576'
						title='Intex 68565 Pull Out Chair H33.8 x W37.2 x D17.6 cm'
						price={'1990'}
						image='https://images-na.ssl-images-amazon.com/images/I/61UhbAMDATL._AC_SL1000_.jpg'
						rating={1}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='765876576'
						title='Apple Watch Series 5 GPS, 40mm Space Grey Aluminium Case with Black Sport Band'
						price={'1590'}
						image='https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._AC_SL1500_.jpg'
						rating={5}
					/>
					<Product
						id='765876576'
						title='Dog Toothbrush Teeth Cleaning Chew Toy, Puppy Dental Care Brushing Stick, Nontoxic Natural Rubber Bite Resistance Chew Toys for Small Medium Dogs Pets Oral Care (Green)'
						price={'90'}
						image='https://images-na.ssl-images-amazon.com/images/I/61mDsKkUUKL._AC_SL1305_.jpg'
						rating={4}
					/>
					<Product
						id='77786576'
						title='Dog Back-Seat Cover Protector Waterproof Scratchproof Nonslip Hammock for Dogs Backseat Protection Against Dirt and Pet Fur Durable Pets Seat Covers for All Cars Trucks SUVs (Black\Orange)'
						price={'390'}
						image='https://images-na.ssl-images-amazon.com/images/I/81JavB5iSiL._AC_SL1500_.jpg'
						rating={3}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='76587576'
						title='Samsung 55RU7100 55 Inch Flat Smart 4K UHD TV Series 7 (2019) - Black'
						price={'1190'}
						image='https://images-na.ssl-images-amazon.com/images/I/91EHdo7M0rL._AC_SL1500_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
