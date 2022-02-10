import { Container, Typography } from '@mui/material';
import HolidaysList from 'components/HolidaysList';
import { getName } from 'country-list';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useHolidays from 'shared/hooks/useHolidays';

const HolidaysCountry = () => {
	// Holidays Context
	const { changeCountry } = useHolidays();

	const { country } = useParams();

	useEffect(() => {
		changeCountry(country!);
	}, []);

	return (
		<Container maxWidth={'lg'} sx={{ mb: 3 }}>
			<Typography
				variant={'h3'}
				component={'h1'}
				sx={{ fontWeight: 'bold' }}
			>
				{getName(country!)}
			</Typography>

			<HolidaysList />
		</Container>
	);
};

export default HolidaysCountry;
