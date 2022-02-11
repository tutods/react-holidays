import { Container, Typography } from '@mui/material';
import HolidaysList from 'components/HolidaysList';
import { HolidaysContext } from 'contexts/HolidaysContext';
import { getName } from 'country-list';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HolidaysCountry = () => {
	// Holidays Context
	const { handlerChangeCountry } = useContext(HolidaysContext);

	const { country } = useParams();

	useEffect(() => {
		if (country) {
			handlerChangeCountry(country);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container maxWidth={'lg'} sx={{ mb: 3 }}>
			<Typography
				variant={'h3'}
				component={'h1'}
				sx={{ fontWeight: 'bold' }}
			>
				{getName(country && country)}
			</Typography>

			<HolidaysList />
		</Container>
	);
};

export default HolidaysCountry;
