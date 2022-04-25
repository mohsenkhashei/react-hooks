import React, { useReducer } from 'react';
import type { NextPage } from 'next';

enum actionType {
	INCREMENT = 'INCREMENT',
	toggleShowText = 'toggleShowText',
}
interface stateAction {
	type: actionType;
}

interface countState {
	count: number;
	showText: boolean;
}

const reducer = (state: countState, action: stateAction) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1, showText: state.showText };
		case 'toggleShowText':
			return { count: state.count, showText: !state.showText };
		default:
			return state;
	}
};

const Reducer: NextPage = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
	return (
		<>
			<div>
				<h1 style={{ color: 'gray' }}>Reducer</h1>
				<h5>{state.count}</h5>
				<button
					onClick={() => {
						dispatch({ type: actionType.INCREMENT });
						dispatch({ type: actionType.toggleShowText });
					}}
				>
					{' '}
					click here{' '}
				</button>
				{state.showText && <p>show text</p>}
			</div>
		</>
	);
};

export default Reducer;
