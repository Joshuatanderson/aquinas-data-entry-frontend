import { Button, Container, FormLabel, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { requiredFields } from "../data/requiredFields";
import { Validator } from "../util/validate";
import { theme } from "../theme";
import InputField from "./InputField";
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

	useEffect(() => {
		if (
			!(
				Object.values(formSubmissionValue || {})?.length < requiredFields.length
			) ||
			Object.values(formSubmissionValue || {})?.some((val) => val.error)
		) {
			setIsSubmitting(false);
			setShowErrors(true);
			return;
		}
		// submit to server
	}, [formSubmissionValue]);

	const classes = useStyles();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setShowErrors(false);
	};

	const makeFields = () => {
		return requiredFields.map((field: Field, index) => (
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
			<Grid container>
				<Grid item xs={12}>
					<form onSubmit={handleSubmit} className={classes.form}>
						<FormLabel className={classes.label}>Fields</FormLabel>
						<Grid container spacing={1}>
							{makeFields()}
						</Grid>
						<Button variant="outlined" type="submit">
							Submit
						</Button>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default InputForm;
