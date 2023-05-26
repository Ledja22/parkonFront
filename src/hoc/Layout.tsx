/** @format */

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
	children: string | JSX.Element | JSX.Element[];
};

const Layout = (props: LayoutProps): JSX.Element => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div>{props.children}</div>;
			<Footer className="mt-auto" />
		</div>
	);
};

export default Layout;
