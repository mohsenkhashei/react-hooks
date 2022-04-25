import React, { useEffect } from 'react';
import type { NextPage } from 'next';

const Child: NextPage = ({ returnComment }) => {
	useEffect(() => {
		console.log('function was called');
	}, [returnComment]);

	return (
		<>
			<div>{returnComment('yeah')}</div>
		</>
	);
};

export default Child;
