import React, { useRef, useState, useCallback, useEffect } from 'react';
import Home from './views/Home/index';
import Projects from './views/Projects';
import { Link } from 'react-scroll';

console.log('💡 Running v2.0.0');

export const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Home />
			<Projects />
		</React.Fragment>
	);
};
