import React from 'react';
import { render } from 'react-dom';
import App from './App';


const rootElement = document.getElementById('root');

render(<App />, rootElement);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default; // eslint-disable-line global-require

		render(<NextApp />, rootElement);
	});
}