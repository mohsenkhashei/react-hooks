import React, { useLayoutEffect, useEffect, useRef } from 'react';
import type { NextPage } from 'next';

// useRef access and manipulate DOM elements
const LayoutEffect: NextPage = () => {
	const inputRef = useRef(null);

	useLayoutEffect(() => {
		console.log(inputRef.current.value);
	});

	useEffect(() => {
		inputRef.current.value = 'hello';
	});

	return (
		<>
			<div>
				<h1>LayoutEffect</h1>
				<div >
					<input type="text" ref={inputRef} value="mohsen" />
				</div>
			</div>
		</>
	);
};
export default LayoutEffect;
