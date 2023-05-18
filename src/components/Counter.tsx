/** @format */

import React from 'react';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';

const Counter = () => {
	const count = useSelector((state: RootState) => state.counterReducer.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<h1 className="text-3xl text-indigo-400 font-bold underline">
					Hello world!
				</h1>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					className="bg-primary-500 m-10"
					onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
		</div>
	);
};
export default Counter;
