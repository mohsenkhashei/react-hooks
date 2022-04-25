import React, { useContext } from 'react';
import type { NextPage } from 'next';
import { AppContext } from './context';

const User: NextPage = () => {
	const { username } = useContext(AppContext);

	return (
		<>
			<div>
				<h1>User: {username} </h1>
			</div>
		</>
	);
};
export default User;
