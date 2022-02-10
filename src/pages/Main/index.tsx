import Header from 'components/ui/Header';
import { HolidaysContextProvider } from 'contexts/HolidaysContext';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

const Main = () => {
	return (
		<BrowserRouter>
			<Header />

			<HolidaysContextProvider>
				<AppRoutes />
			</HolidaysContextProvider>
		</BrowserRouter>
	);
};

export default Main;
