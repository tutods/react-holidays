import { getYear } from 'date-fns';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HolidaysType } from 'shared/@types/Holidays';
import holidaysApi from 'shared/services/api';

export type HolidaysContextProps = {
	date: Date;

	holidays: HolidaysType;

	country: string;

	changeDate: (newDate: Date | null) => void;

	changeCountry: (country: string) => void;
};

type HolidaysContextProviderProps = {
	children: ReactNode;
	country?: string;
};

export const HolidaysContext = createContext({} as HolidaysContextProps);

export const HolidaysContextProvider = ({
	children
}: HolidaysContextProviderProps) => {
	const navigate = useNavigate();

	// States
	const [date, setDate] = useState<Date>(new Date());
	const [holidays, setHolidays] = useState<HolidaysType>([]);
	const [country, setCountry] = useState<string>('PT');

	const getHolidays = async () => {
		try {
			const { data } = await holidaysApi.get<HolidaysType>(
				`${getYear(date!)}/${country.toUpperCase()}`
			);
			setHolidays(data);
		} catch (error: any) {
			if (error.response.status === 404) {
				navigate('/404');
			}

			console.log(error);
		}
	};

	useEffect(() => {
		getHolidays();

		return () => {
			setHolidays([]);
			setDate(new Date());
		};

		// eslint-disable-next-line
	}, [country]);

	const changeDate = (newDate: Date | null) => {
		console.log(newDate);
		setDate(newDate!);
	};

	const changeCountry = (country: string) => setCountry(country);

	return (
		<HolidaysContext.Provider
			value={{ date, holidays, country, changeDate, changeCountry }}
		>
			{children}
		</HolidaysContext.Provider>
	);
};
