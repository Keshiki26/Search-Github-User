import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#484848',
			main: '#212121',
			dark: '#000000',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#ff79ff',
			main: '#e040fb',
			dark: '#aa00c7',
			contrastText: '#ffffff',
		},
	},
});
export default theme;
