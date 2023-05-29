/** @format */

import PrimaryButton from '../core/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import ParkonLogo from '../assets/images/parkon-logo.png';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const goTo = () => {
		navigate('/signin');
	};
	return (
		<div>
			<nav className="flex flex-row justify-between items-center bg-green-500 p-3">
				<div className="flex">
					<img src={ParkonLogo} className="w-14 h-12" />
				</div>
				<div className="flex items-center cursor-pointer space-x-4">
					<div className="flex space-x-8 text-white text-sm">
						<div onClick={() => navigate('/home')}>Home</div>
						<div onClick={() => navigate('/profile')}>Profile</div>
					</div>
					<PrimaryButton
						to="/signin"
						label="SIGN OUT"
						onClick={() => dispatch(logout())}
					/>
				</div>
			</nav>
		</div>
	);
};
export default Header;
