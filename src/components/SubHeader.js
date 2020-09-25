import React from 'react';
import '../styles/SubHeader.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function SubHeader() {
	return (
		<div className='subHeader'>
			<div className='subHeader__optionLocation'>
				<LocationOnIcon />
				<div className='subHeader__optionDetails'>
					<span className='header__optionLineOne'>Deliver to</span>
					<span className='header__optionLineTwo'>United Arab Emirates</span>
				</div>
			</div>
			<div className='subHeader__menu'>
				<Link to='/' className='SubHeader__menuItem'>
					Best Sellers
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Today's Deals
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Mobile Phones
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Electronics
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Customer Service
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Fashion
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					New Releases
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Computers
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Perfumes
				</Link>
				<Link to='/' className='SubHeader__menuItem'>
					Gift Cards
				</Link>
			</div>
			<img
				src='https://images-eu.ssl-images-amazon.com/images/G/39/digital/video/merch/2019/Magellan/PVD2033_UAePrimeLaunch/BRND_APR19_00000_SWM_400x39_Final_en_AE_FT_PVD2033_UAePrimeLaunch._CB465788000_.jpg'
				alt=''
				className='subHeader__promotion'
			/>
		</div>
	);
}

export default SubHeader;
