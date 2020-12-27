import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import axiosInstance from '../../helpers/interceptors';
import { Bar } from 'react-chartjs-2';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
export default function Home() {
	// The first commit of Material-UI
	const [selectedDateFrom, setSelectedDateFrom] = useState(new Date().toISOString().slice(0, 10));
	const [selectedDateTo, setSelectedDateTo] = useState(new Date().toISOString().slice(0, 10));

	useEffect(() => {
		getFilterDay();
	}, [selectedDateFrom,selectedDateTo]);

	function getFilterDay() {
		axiosInstance
			.get('/branches/1/reviews', {
				date_from: selectedDateFrom,
				date_to: selectedDateTo,
			})
			.then((res) => console.log(res));
	}

	const handleDateFromChange = (date) => {
		setSelectedDateFrom(new Date(date).toISOString().slice(0, 10));
		getFilterDay();
		console.log(selectedDateFrom)
	};
	const handleDateToChange = (date) => {
		setSelectedDateTo(new Date(date).toISOString().slice(0, 10));
		getFilterDay();
		console.log(selectedDateTo)
	};

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
			<Bar
				data={{
					labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [
						{
							label: 'india',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: 'orange',
                        },
                        {
							label: 'َpakistan',
                            data: [47, 52, 67, 58, 9, 50],
                            backgroundColor: 'green',
						},
					],
				}}
				width={100}
				height={100}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
}
