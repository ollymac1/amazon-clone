import React from 'react';
import '../styles/BackToTop.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function BackToTop() {
	return (
		<div className='backToTop'>
			<a href='#top'>
				<p>Back to top</p>
			</a>
		</div>
	);
}

export default BackToTop;
