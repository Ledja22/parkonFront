/** @format */

import { EyeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Footer = (props: any) => {
	return (
		<div className={props.className}>
			<div className="px-5 md:px-15 bg-gray-600">
				<div className="flex flex-col md:flex-row justify-start items-start border-t p-5 md:p-15 text-white text-opacity-90">
					<Link to="/">
						<EyeIcon className="w-6 h-6" />
					</Link>
					<div className="flex flex-1 md:justify-end flex-wrap sm:flex-nowrap text-sm md:text-base">
						<ul className="uppercase px-5 md:px-15 py-5 md:py-0 space-y-1">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about-us">About us</Link>
							</li>
							<li>
								<Link to="/contact-us">Contact us</Link>
							</li>
							<li>
								<Link to="/our-services">Our services</Link>
							</li>
						</ul>
						<ul className="uppercase px-5 md:px-15 py-5 md:py-0 space-y-1">
							<li>
								<Link to="/faq">FAQ</Link>
							</li>
							<li>
								<Link to="/terms-and-conditions">Terms and Conditions</Link>
							</li>
							<li>
								<Link to="/careers">Career</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center text-white uppercase text-xs p-5 md:px-15 py-8 font-montserrat tracking-wide border-t leading-7">
					<a href="tel:+355697047231" className="flex flex-row items-center">
						<span className="mr-3">Tel:</span> +355 69 70 47 231
					</a>
					<div className="flex flex-1 flex-col md:flex-row justify-center">
						<a
							href="mailto:support@rpay.ai"
							className="flex flex-row items-center md:mx-10">
							<span className="mr-3">E-mail:</span> support@rpay.ai
						</a>
						<li className="flex flex-row flex-wrap items-center md:mx-10">
							<span className="mr-3">Address:</span> Rr. Frank Bardhi, Tiranë,
							Albania, Kristal Center, Kati 2
						</li>
					</div>
					<div>{new Date().getFullYear()}</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
