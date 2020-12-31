import React from 'react';
import { Bar } from 'react-chartjs-2';
export default function BarChart() {
	return (
		<div>
			<Bar
				data={{
					labels:  [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
					datasets: [
						{
							label: 'Question',
							data: [12, 19, 3, 5, 2, 3,12, 19, 3, 5, 2, 3],
							backgroundColor: 'orange',
						},
						{
							label: 'Choice',
							data: [47, 52, 67, 58, 9, 50,47, 52, 67, 58, 9, 50],
							backgroundColor: 'green',
						},
					],
				}}
				width={100}
				height={300}
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
