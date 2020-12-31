import React, { useState, useEffect } from 'react';
import axiosInterceptors from '../../interceptors/interceptors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Form = styled.form`
	padding: 15px;
`;
const FormControlQuestion = styled(FormControl)`
	padding: 15px;
`;

const Question = () => {
	const [questions, setQuestions] = useState([]);
	const [objValue, setValue] = useState({});
	const handleChange = (event) =>
		setValue({ ...objValue, [event.target.name]: event.target.value });

	useEffect(() => {
		getQuestions();
	}, []);

	const getQuestions = () =>
		axiosInterceptors.get('/questions').then((res) => {
			let questionsArr = res.data.en;
			questionsArr = questionsArr.filter((item,index) => index === 1 || index === 3)
			setQuestions(questionsArr)
		});

	return (
		<Form>
			{questions.map((question, index) => (
				<Grid item xs={12} key={index}>
					<FormControlQuestion component='fieldset'>
						<FormLabel component='legend'>{question.text}</FormLabel>
						<RadioGroup
							name={`question${question.order}`}
							value={objValue || null}
							onChange={handleChange}>
							{question.choices.map((choice, index) => (
								<FormControlLabel
									key={index}
									value={choice.text}
									control={
										<Radio
											checked={
												objValue[`question${question.order}`] === choice.text
											}
											color='primary'
										/>
									}
									label={choice.text}
								/>
							))}
						</RadioGroup>
					</FormControlQuestion>
				</Grid>
			))}
		</Form>
	);
};
export default Question;
