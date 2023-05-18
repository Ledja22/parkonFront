/** @format */

import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type PrimaryButtonProps = {
	label?: string;
	link?: boolean | false;
	to: string | '';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	icon?: null;
	sm?: boolean | false;
	disabled?: boolean | false;
	isLoading?: boolean | false;
	className?: string;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<div className={props.className}>
			{props.link ? (
				<Link
					className={`${
						props.sm ? 'text-sm' : 'text-xs'
					} flex items-center font-medium bg-indigo-400 text-white rounded-md py-2 px-4 h-9`}
					to={props.to}>
					{props.label}
				</Link>
			) : (
				<button
					className={`${
						props.sm ? 'text-sm' : 'text-xs'
					} flex items-center justify-center font-medium transition ease-in-out duration-400 bg-indigo-600 hover:bg-primary-700 
          text-white rounded-md py-2 px-4 flex-1 h-9 disabled:bg-gray-400 disabled:cursor-not-allowed`}
					onClick={props.onClick}
					disabled={props.disabled || props.isLoading}>
					{props.isLoading && (
						<div className="mr-1">
							<div
								style={{ borderTopColor: 'transparent' }}
								className="w-4 h-4 border-2 border-blue-40  0 border-dotted rounded-full animate-spin"
							/>
						</div>
					)}
					{!props.isLoading && props.icon}
					{props.label}
				</button>
			)}
		</div>
	);
};

export default PrimaryButton;
