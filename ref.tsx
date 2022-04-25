import React, { useRef } from 'react';
import type { NextPage } from 'next';

// useRef access and manipulate DOM elements
const Ref: NextPage = () => {
	const inputRef = useRef(null);

	const onClick = () => {
		inputRef!.current!.focus();
		inputRef!.current!.value = '';
	};
	return (
		<>
			<div>
				<h1>Ref</h1>
				<input type="text" placeholder="...." ref={inputRef} />
				<button onClick={onClick}>change name</button>
			</div>
		</>
	);
};
export default Ref;
