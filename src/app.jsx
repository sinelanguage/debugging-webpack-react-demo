import React from 'react';
import './style/style.css';
import One from './one';
import Two from './two';

const App = () => (
	<div>
		<h1 className="foo"> Hello, World! </h1>
		<One text="One" />
		<Two text="TWO" />
	</div>
);

export default App;
