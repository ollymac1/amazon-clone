import React from 'react';
import '../styles/Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__sectionOne'>
				<div className='footer__item'>
					<span className='footer__heading'>Get to Know Us</span>
					<span className='footer__link'>About Amazon</span>
					<span className='footer__link'>Careers</span>
				</div>
				<div className='footer__item'>
					<span className='footer__heading'>Shop with Us</span>
					<span className='footer__link'>Your Account</span>
					<span className='footer__link'>Your Orders</span>
					<span className='footer__link'>Your Addresses</span>
					<span className='footer__link'>Your Lists</span>
				</div>
				<div className='footer__item'>
					<span className='footer__heading'>Make Money with Us</span>
					<span className='footer__link'>Sell on Amazon</span>
					<span className='footer__link'>Fulfilment by Amazon</span>
					<span className='footer__link'>Become and Affilliate</span>
					<span className='footer__link'>Advertise Your Products</span>
				</div>
				<div className='footer__item'>
					<span className='footer__heading'>Let Us Help You</span>
					<span className='footer__link'>Help</span>
					<span className='footer__link'>Covid-19 and Amazon</span>
					<span className='footer__link'>Shipping & Delivery</span>
					<span className='footer__link'>Returns & Replacements</span>
				</div>
			</div>
			<div className='footer__sectionTwo'>
				<a href='#top'>
					<img
						src='https://i.ibb.co/RH3vzMY/kindpng-172246.png'
						alt='Amazon Logo'
					/>
				</a>
				<div className='footer__language'>
					<LanguageIcon className='footer__icon' /> English{' '}
					<KeyboardArrowDownIcon className='footer__icon' />
				</div>
				<div className='footer__location'>
					<span role='img' aria-label='UAE'>
						🇦🇪
					</span>{' '}
					United Arab Emirates
				</div>
			</div>
		</div>
	);
}

export default Footer;
