import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import axios, {AxiosResponse} from 'axios';

const Effect: NextPage = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')
			.then((response: AxiosResponse) => {
				setData(response.data[0].email);
			});
	}, []);
	return (
		<>
			<div>
				<h1>Effect</h1>
				<h5>{data}</h5>
			</div>
		</>
	);
};
export default Effect;
