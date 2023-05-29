/** @format */

import { FormEventHandler, useState } from 'react';
import Input from '../core/Input';
import PrimaryButton from '../core/PrimaryButton';
import PasswordInput from '../core/PasswordInput';
import API from '../utils/API';
import { useDispatch } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitForm: FormEventHandler = (e) => {
		e.preventDefault();
		dispatch(showSpinner('Loading data...'));
		API.post('/auth/signin', {
			username: email,
			password,
		})
			.then((res) => {
				console.log(res.data.accessToken);
				dispatch(login(res.data.accessToken));
				navigate('/home');
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => dispatch(hideSpinner()));
	};

	return (
		<div className="login-bg">
			<div
				className="flex items-center justify-center h-screen w-2/5 "
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}>
				<form
					className="flex w-full items-center justify-center bg-white p-10 rounded-lg shadow-md rounded-lg"
					onSubmit={onSubmitForm}>
					<div className="w-full">
						<h3 className="text-center mb-2 font-lg font-bold">Sign In</h3>
						<div className="w-full mt-3">
							<div>Email address</div>
							<Input
								className="w-full mb-4 "
								placeholder="Enter email"
								handleInputChange={setEmail}
							/>
						</div>
						<div className="mb-3">
							<div>Password</div>
							<PasswordInput
								className="w-full mb-4 rounded"
								placeholder="Enter password"
								handleInputChange={setPassword}
							/>
						</div>
						<div className="flex w-full mt-8">
							<PrimaryButton className="flex w-full" to="" label="Submit" />
						</div>
						<div className="flex justify-between">
							<p
								className="cursor-pointer text-left my-3 text-indigo-600"
								onClick={() => navigate('/register')}>
								Register here!
							</p>
							<a className="text-right my-3">Forgot password?</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
export default LoginPage;
