import { getYear } from 'date-fns';
import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useState
} from 'react';
import { HolidaysType } from 'shared/@types/Holidays';
import holidaysApi from 'shared/services/api';

export type HolidaysContextProps = {
	date: Date;

	holidays: HolidaysType;

	country: string;

	changeDate: (newDate: Date | null) => void;

	handlerChangeCountry: (value: string) => void;
};

type HolidaysContextProviderProps = {
	children: ReactNode;
	country?: string;
};

export const HolidaysContext = createContext({} as HolidaysContextProps);

export const HolidaysContextProvider = ({
	children
}: HolidaysContextProviderProps) => {
	// States
	const [date, setDate] = useState<Date>(new Date());
	const [holidays, setHolidays] = useState<HolidaysType>([]);
	const [country, setCountry] = useState<string>('PT');

	const getHolidays = useCallback(async () => {
		try {
			if (date) {
				const { data } = await holidaysApi.get<HolidaysType>(
					`${getYear(date)}/${country.toUpperCase()}`
				);

				console.log(data);

				setHolidays(data);
			}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error.response.status === 404) {
				console.log('REDIRECT TO 404');
			}

			console.log(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date]);

	useEffect(() => {
		getHolidays();
	}, [getHolidays]);

	const changeDate = (newDate: Date | null) => {
		if (newDate) {
			setDate(newDate);
		}
	};

	const handlerChangeCountry = (value: string) => setCountry(value);

	return (
		<HolidaysContext.Provider
			value={{
				date,
				holidays,
				country,
				changeDate,
				handlerChangeCountry
			}}
		>
			{children}
		</HolidaysContext.Provider>
	);
};
