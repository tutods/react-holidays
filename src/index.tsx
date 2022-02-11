import { CssBaseline, ThemeProvider } from '@mui/material';
import 'flag-icons/css/flag-icons.min.css';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import theme from './assets/styles/theme';
import Main from './pages/Main';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Main />
	</ThemeProvider>,
	document.getElementById('root')
);
