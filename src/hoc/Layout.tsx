/** @format */

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
	children: string | JSX.Element | JSX.Element[];
};

const Layout = (props: LayoutProps): JSX.Element => {
	return (
		<div className="grid grid-cols-1 max-h-screen h-screen relative " style={{gridTemplateRows: '60px calc(100vh - (60px + 61px)) 61px'}}>
			<Header />
			<div className='overflow-auto'>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
