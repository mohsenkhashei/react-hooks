import React, { forwardRef, useState, useImperativeHandle } from 'react';
import type { NextPage } from 'next';

// useRef access and manipulate DOM elements
const Button = forwardRef((props, ref) => {
	const [toggle, setToggle] = useState(false);

	useImperativeHandle(ref, () => ({
		alterToggle(){
			setToggle(!toggle);
		},
	}));
	return (
		<>
			<div>
				<button
					onClick={() => {
						setToggle(!toggle);
					}}
				>
					Button from child
				</button>
				{toggle && <span>Toogle</span>}
			</div>
		</>
	);
});
export default Button;
