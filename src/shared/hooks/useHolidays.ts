import {
	HolidaysContext,
	HolidaysContextProps
} from 'contexts/HolidaysContext';
import { useContext } from 'react';

function useHolidays(): HolidaysContextProps {
	const context = useContext(HolidaysContext);

	return context;
}

export default useHolidays;
