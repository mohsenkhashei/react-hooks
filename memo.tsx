import React, { useEffect, useState, useMemo } from 'react';
import type { NextPage } from 'next';
import axios, { AxiosResponse } from 'axios';

const Memo: NextPage = () => {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')
			.then((response: AxiosResponse) => {
				setData(response.data);
			});
	}, []);

	const findLongestName = (comments) => {
		if (!comments) return null;

		let longestName = '';
		for (let i = 0; i < comments.length; i++) {
			let currentName = comments[i].name;
			if (currentName.length > longestName.length) {
				longestName = currentName;
			}
		}
		console.log('this was computed');
		return longestName;
	};

	const getLongestName = useMemo(() => findLongestName(data), [data]);
	return (
		<>
			<div>
				<h1>Memo</h1>
				<h5>{getLongestName}</h5>
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
export default Memo;
