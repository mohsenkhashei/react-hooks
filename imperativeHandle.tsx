import React, { useRef } from 'react';
import type { NextPage } from 'next';
import Button from './_button';

// useRef access and manipulate DOM elements
const ImperativeHandle: NextPage = () => {
	const buttonRef = useRef(null)

	
	return (
		<>
			<div>
				<h1>Imperative Handle</h1>
				
				<button onClick={() => {buttonRef.current.alterToggle()}}>button from parent</button>
				<Button ref={buttonRef}/> 
			</div>
		</>
	);
};
export default ImperativeHandle;
