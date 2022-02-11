import { Card, CardContent, Stack, SxProps, Typography } from '@mui/material';
import { getName, getCode } from 'country-list';
import { Link } from 'react-router-dom';
import { FlagIcon } from './styles';

type Props = {
	countryCode: string;
	sx?: SxProps;
};

const CountryCard = ({ countryCode, sx, ...props }: Props) => {
	const cardStyle = {
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: 'transparent',
		py: 2,
		borderRadius: 2,
		boxShadow: 3,
		cursor: 'pointer',
		textDecoration: 'none',
		transition: 'border-color 0.25s ease-in-out',
		height: '100%',

		'&:hover': {
			borderColor: 'primary.main'
		}
	};

	return (
		<Card
			{...props}
			sx={{
				...sx,
				...cardStyle
			}}
			component={Link}
			to={`/holidays/${countryCode.toLowerCase()}`}
		>
			<CardContent
				component={Stack}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					height: '100%'
				}}
			>
				<FlagIcon
					className={`fi fi-${countryCode.toLowerCase()}`}
				></FlagIcon>

				<Typography
					sx={{
						my: 2,
						fontWeight: 'bold',
						mb: 0
					}}
					variant='h6'
					component='h3'
				>
					{getName(countryCode)}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CountryCard;
