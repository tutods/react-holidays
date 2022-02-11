import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Stack } from '@mui/material';
import HolidayCard from 'components/cards/HolidayCard';
import { HolidaysContext } from 'contexts/HolidaysContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HolidayType } from 'shared/@types/Holidays';

const HolidaysList = () => {
	const navigate = useNavigate();

	const { date, holidays, changeDate } = useContext(HolidaysContext);

	const handlerBackBtnClick = () => navigate(-1);

	return (
		<>
			<Stack
				direction={'row'}
				spacing={3}
				alignItems={'center'}
				justifyContent={'space-between'}
				sx={{ textAlign: 'center', my: 4 }}
			>
				{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						views={['year', 'month', 'day']}
						value={date}
						onChange={changeDate}
						renderInput={(params) => <TextField {...params} />}
						inputFormat={'dd/MM/yyyy'}
					/>
				</LocalizationProvider> */}

				<Button
					onClick={handlerBackBtnClick}
					variant={'outlined'}
					startIcon={<ChevronLeftIcon />}
				>
					Go Back
				</Button>
			</Stack>

			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: 3
				}}
			>
				{holidays &&
					holidays.map((holiday: HolidayType) => (
						<HolidayCard
							key={`${holiday.name
								.toLowerCase()
								.split(' ')
								.join('-')}-${
								holiday.date
							}-${holiday.countryCode.toLowerCase()}`}
							holiday={holiday}
						/>
					))}
			</Box>
			{/* <Typography sx={{ textAlign: 'center' }} variant={'h5'}>
					No holidays founded for this country!
				</Typography> */}
		</>
	);
};

export default HolidaysList;
