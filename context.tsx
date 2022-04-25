import React, { useState, createContext } from 'react';
import type { NextPage } from 'next';
import Login from './_login';
import User from './_user';

export const AppContext = createContext(null);

const Context: NextPage = () => {
	const [username, setUsername] = useState(null);

	return (
		<>
			<h1>Context</h1>
			<AppContext.Provider value={{ username, setUsername }}>
				<Login />
				<User />
			</AppContext.Provider>
		</>
	);
};
export default Context;
