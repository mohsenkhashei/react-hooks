import React, { useContext } from 'react';
import type { NextPage } from 'next';
import { AppContext } from './context';

const Login: NextPage = () => {
	const { setUsername } = useContext(AppContext);
	return (
		<>
			<div>
				<input
					type="text"
					onChange={(event) => {
						setUsername(event.target.value);
					}}
				/>
			</div>
		</>
	);
};
export default Login;
