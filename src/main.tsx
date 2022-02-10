import { CssBaseline, ThemeProvider } from '@mui/material';
import 'assets/styles/global.scss';
import theme from 'assets/styles/theme';
import 'flag-icons/css/flag-icons.min.css';
import Main from 'pages/Main';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Main />
	</ThemeProvider>,
	document.getElementById('root')
);
