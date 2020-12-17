import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import palette from './palette';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
	<ThemeProvider theme={palette}>
		<App className="App" />
	</ThemeProvider>,
	document.getElementById('root')
);
