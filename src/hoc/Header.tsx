/** @format */

import { EyeIcon } from '@heroicons/react/outline';
import PrimaryButton from '../core/PrimaryButton';
import { useNavigate } from 'react-router-dom';
const Header = () => {
	const navigate = useNavigate();

	const goTo = () => {
		navigate('/signin');
	};
	return (
		<div>
			<nav className="flex flex-row justify-between items-center  bg-green-500 p-3">
				<div className="flex">
					<EyeIcon className="w-6 h-6" />
				</div>
				<div className="flex items-center space-x-4">
					<div className="flex space-x-8 text-white text-sm">
						<div>News</div>
						<div>Blog</div>
						<div>Areas</div>
						<div>Why us</div>
					</div>
					<PrimaryButton to="/signin" label="SIGN IN" />
				</div>
			</nav>
		</div>
	);
};
export default Header;
