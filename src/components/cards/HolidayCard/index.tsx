import { Card, CardContent, SxProps, Typography } from '@mui/material';
import { HolidaysContext } from 'contexts/HolidaysContext';
import { format, parseISO } from 'date-fns';
import { useContext } from 'react';
import { HolidayType } from 'shared/@types/Holidays';

type Props = {
	holiday: HolidayType;
	sx?: SxProps;
};

const HolidayCard = ({ holiday, sx, ...props }: Props) => {
	const { date } = useContext(HolidaysContext);

	const cardStyle = {
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor:
			format(parseISO(holiday.date), 'yyyy-MM-dd') ===
			format(date!, 'yyyy-MM-dd')
				? 'primary.main'
				: 'transparent',
		py: 2,
		borderRadius: 2,
		boxShadow: 3
	};

	return (
		<Card
			{...props}
			sx={{
				...sx,
				...cardStyle
			}}
		>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color='text.secondary'
					gutterBottom
				>
					{format(parseISO(holiday.date), 'dd/MM/yyyy')}
				</Typography>
				<Typography
					sx={{
						fontWeight: 'bold',
						color: 'primary.main'
					}}
					variant='h5'
					component='div'
				>
					{holiday.name}
				</Typography>
				<Typography sx={{ color: 'grey.600' }} variant={'subtitle2'}>
					({holiday.localName})
				</Typography>
			</CardContent>
		</Card>
	);
};

export default HolidayCard;
