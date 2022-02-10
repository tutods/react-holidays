import { Box, Container, Typography } from '@mui/material';
import CountryCard from 'components/cards/CountryCard';
import { getCodes } from 'country-list';

const App = () => {
	return (
		<Container maxWidth={'lg'} sx={{ mb: 3 }}>
			<Typography
				variant={'h3'}
				component={'h1'}
				sx={{ fontWeight: 'bold', mb: 3 }}
			>
				List of Countries
			</Typography>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, 1fr)',
					gap: 3,
					alignItems: 'center'
				}}
			>
				{getCodes().map((country: string) => (
					<CountryCard key={country} countryCode={country} />
				))}
			</Box>
		</Container>
	);
};

export default App;
