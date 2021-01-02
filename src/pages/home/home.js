import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import BarChart from '../../components/barChart/barChart';
import axiosInterceptors from '../../interceptors/interceptors';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

const ConverDateFormat = (date) => date.toISOString().slice(0, 10);

const Home = () => {
	const [selectedDateFrom, setSelectedDateFrom] = useState(
		ConverDateFormat(new Date())
	);
	const [selectedDateTo, setSelectedDateTo] = useState(
		ConverDateFormat(new Date())
	);

	useEffect(() => {
		const getProgress = () => {
			axiosInterceptors
				.get('/branches/1/progress', {
					date_from: selectedDateFrom,
					date_to: selectedDateTo,
				})
				.then((res) => console.log(res))
				.catch((error) => {
					throw new Error(error.message);
				});
		};
		getProgress();
	}, [selectedDateFrom, selectedDateTo]);

	const handleDateFromChange = (date) =>
		setSelectedDateFrom(ConverDateFormat(date));
	const handleDateToChange = (date) =>
		setSelectedDateTo(ConverDateFormat(date));

	return (
		<div>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='space-around'>
					<KeyboardDatePicker
						disableToolbar
						variant='inline'
						format='dd/MM/yyyy'
						margin='normal'
						label='Date From'
						value={selectedDateFrom}
						onChange={handleDateFromChange}
						maxDate={new Date()}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
					<KeyboardDatePicker
						disableToolbar
						variant='inline'
						format='dd/MM/yyyy'
						margin='normal'
						label='Date To'
						value={selectedDateTo}
						onChange={handleDateToChange}
						minDate={selectedDateFrom}
						maxDate={new Date()}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
			<BarChart />
		</div>
	);
};

export default Home;
