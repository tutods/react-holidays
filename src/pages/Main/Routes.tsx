import App from 'pages/App';
import HolidaysCountry from 'pages/HolidaysCountry';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
	<Routes>
		<Route path={'*'} element={<NotFound />} />

		<Route path={'/'} element={<App />} />

		<Route path={'/holidays/:country'} element={<HolidaysCountry />} />
	</Routes>
);

export default AppRoutes;
