import React from 'react';
import '../styles/App.css';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Header() {
	return (
		<div className='header'>
			<Link to='/'>
				<img
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='Amazon Logo'
					className='header__logo'
				/>
			</Link>

			<div className='header__search'>
				<input type='text' className='header__searchInput' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<div className='header__option menuOption--border'>
					<span className='header__optionLineOne'>Hello Guest</span>
					<span className='header__optionLineTwo'>Sign In</span>
				</div>

				<div className='header__option menuOption--border'>
					<span className='header__optionLineOne'>Returns</span>
					<span className='header__optionLineTwo'>& Orders</span>
				</div>

				<div className='header__option menuOption--border'>
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header__optionBasket menuOption--border'>
						<ShoppingBasketIcon />
						<span className='header__optionLineTwo header__basketCount'>0</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
