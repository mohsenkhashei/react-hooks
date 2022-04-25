import React, { useState, useCallback } from 'react';
import type { NextPage } from 'next';
import Child from './_child';

const Callback: NextPage = () => {
	const [data, setData] = useState('Mohsen khashei');
	const [toggle, setToggle] = useState(false);

	const returnComment = useCallback(
		(name) => {
			return data + name;
		},
		[data]
	);

	return (
		<>
			<div>
				<h1>Callback</h1>
				<Child returnComment={returnComment} />
				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					Toggle
				</button>
				{toggle && <h5> toggle </h5>}
			</div>
		</>
	);
};
export default Callback;
