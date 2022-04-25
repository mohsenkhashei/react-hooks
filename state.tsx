import React, { ChangeEvent, useState } from 'react';
import type { NextPage } from 'next';

const State: NextPage = () => {
	// simple counter
	const [counter, setCounter] = useState(0);
	const increment = (): void => {
		setCounter(counter + 1);
	};

	// changing input value
	const [inputValue, setInputValue] = useState('Mohsen');
	const changeValue = (event: ChangeEvent<HTMLInputElement>): void => {
		const newValue = event.target!.value;
		setInputValue(newValue);
	};

	// counter with increase, decrease and reset
	const initialCount: number = 0;
	const [count, setCount] = useState(initialCount);

	return (
		<>
			<h1 style={{ color: 'gray' }}>State</h1>
			<div>
				<h5 style={{ color: 'gray' }}>simple counter</h5>
				<h6>{counter}</h6>
				<button onClick={increment}>increment</button>
			</div>
			<br />
			<div>
				<h5 style={{ color: 'gray' }}>changing input value</h5>
				<input
					type="text"
					placeholder="enter another name..."
					onChange={(event) => changeValue(event)}
				/>
				<h6> {inputValue}</h6>
			</div>
			<br />
			<div>
				<h5 style={{ color: 'gray' }}>advanced counter</h5>
				Count: {count}
				<button onClick={() => setCount(initialCount)}>Reset</button>
				<button onClick={() => setCount((prevCount) => prevCount - 1)}>
					-
				</button>
				<button onClick={() => setCount((prevCount) => prevCount + 1)}>
					+
				</button>
			</div>
		</>
	);
};
export default State;
