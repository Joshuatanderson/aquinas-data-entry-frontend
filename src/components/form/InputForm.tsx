import { Button, Container, FormLabel, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { requiredFields } from "../../data/requiredFields";
import { Validator } from "../../util/validate";
import { theme } from "../../theme";
import InputField from "../InputField";
import AddOptionalField from "./AddOptionalField";
export interface Field {
	code: string;
	name: string;
	validators: Validator[];
	validate: (validators: Validator[]) => (input: string) => string | undefined;
}

export interface FieldValue {
	code: string;
	name: string;
	value: string;
	error?: true | undefined;
}

const useStyles = makeStyles({
	label: {
		marginBottom: theme.spacing(3),
	},
	cont: {
		marginTop: theme.spacing(3),
	},
	form: {
		width: "100%",
	},
});

const InputForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showErrors, setShowErrors] = useState(false);
	const [formSubmissionValue, setFormSubmissionValue] =
		useState<Record<string, FieldValue>>();
	const [activeFields, setActiveFields] = useState(requiredFields);
	const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);

	useEffect(() => {
		if (!formSubmissionValue || !requiredFields) {
			return;
		}
		if (
			!formSubmissionValue ||
			Object.values(formSubmissionValue || {})?.length < activeFields.length ||
			Object.values(formSubmissionValue || {})?.some((val) => val.error)
		) {
			// console.log(`1: ${!formSubmissionValue} 2: ${}`)
			console.log(activeFields);
			setIsSubmitting(false);
			setShowErrors(true);
			return;
		}

		setSuccessfullySubmitted(true);
		setShowErrors(false);
		setIsSubmitting(false);
		console.log(process.env);
		const submitData = async (formSubmission: Record<string, FieldValue>) => {
			try {
				console.log(process.env?.REACT_APP_API_URL);
				await axios.post(`${process.env?.REACT_APP_API_URL}/item`, {
					...formSubmission,
				});
				setSuccessfullySubmitted(true);
			} catch (err) {
				console.error(err);
			}
		};
		submitData(formSubmissionValue);
	}, [formSubmissionValue]);

	const classes = useStyles();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setShowErrors(false);
	};

	const handleAddActiveField = (field: Field) => {
		if (activeFields.map((active) => active.code).includes(field.code)) {
			return;
		}
		setActiveFields((prevState) => [...prevState, field]);
	};

	const makeFields = () => {
		return activeFields.map((field: Field, index) => (
			<Grid item xs={12} sm={6} key={`${field.name}${index}`}>
				<InputField
					field={field}
					isPendingSubmission={isSubmitting}
					showError={showErrors}
					submitDataCallback={(fieldValue: FieldValue) => {
						setFormSubmissionValue((prevState) => ({
							...prevState,
							[field.code]: fieldValue,
						}));
					}}
				/>
			</Grid>
		));
	};

	return (
		<Container className={classes.cont}>
			<form onSubmit={handleSubmit} className={classes.form}>
				<FormLabel className={classes.label}>Fields</FormLabel>
				<Grid container>{makeFields()}</Grid>
				<Button variant="outlined" type="submit">
					Submit
				</Button>
			</form>
			<AddOptionalField addActiveField={handleAddActiveField} />
		</Container>
	);
};

export default InputForm;
