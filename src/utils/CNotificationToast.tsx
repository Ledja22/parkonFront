/** @format */

import React, { useMemo } from 'react';
import { CircleCheck, X, CircleX, InfoCircle } from 'tabler-icons-react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CNotificationToast = ({
	title,
	body,
	type,
	t,
	isRedirect,
	route,
	searchParams,
}: {
	title: string;
	body: string;
	type: string;
	t: object;
	isRedirect: boolean;
	route: string;
	searchParams: string;
}) => {
	const history = useNavigate();

	const onClose = () => toast.dismiss(t.id);
	const onRedirect = () => {
		if (searchParams) {
			history.replace({
				pathname: route || window.location.pathname,
				search: searchParams,
			});
			return;
		}
		if (route) history.push(route);
	};

	const onClick = isRedirect ? onRedirect : onClose;


	const getIcon = useMemo(() => {
		switch (type) {
			case 'success':
				return <CircleCheck className="text-green-400 h-6" />;
			case 'error':
				return <CircleX className="text-red-500 h-6" />;
			case 'warning':
				return <ExclamationCircleIcon className="text-orange-500 h-6" />;
			default:
				return <InfoCircle className="text-primary-500 h-6" />;
		}
	}, [type]);

	return (
		<div
			className={`flex justify-between bg-white rounded-lg shadow-lg border border-gray-100 p-4 min-w-72 hover:shadow-sm
          transform-gpu translate-y-0 hover:translate-y-1 relative transition-all duration-500 ease-in-out cursor-pointer 
          ${style}`}
			onClick={onClick}>
			<div className="flex justify-start items-center mr-10">
				{getIcon}
				<div className="flex flex-col ml-3">
					<span className="text-sm leading-5 font-medium text-gray-900">
						{title}
					</span>
					<span className="text-gray-400 leading-4 font-normal text-sm">
						{body}
					</span>
				</div>
			</div>
			<div>
				<X
					className="text-gray-400 hover:cursor-pointer hover:text-gray-600 hover:scale-110"
					width={17}
					onClick={onClose}
				/>
			</div>
		</div>
	);
};

export default CNotificationToast;
