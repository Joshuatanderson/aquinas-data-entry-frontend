import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	inputAdornmentClasses,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { requiredFields, Validator } from "../data/requiredFields";
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
}

const useStyles = makeStyles({
	label: {
		marginBottom: theme.spacing(3),
	},
});

const InputForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showErrors, setShowErrors] = useState(false);
	const [formSubmissionValue, setFormSubmissionValue] =
		useState<Record<string, FieldValue>>();

	const classes = useStyles();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setShowErrors(false);
	};

	const makeFields = () => {
		return requiredFields.map((field: Field, index) => (
			<InputField
				key={`${field.name}${index}`}
				field={field}
				isPendingSubmission={isSubmitting}
				showError={showErrors}
				submitDataCallback={(fieldValue: FieldValue) => {
					setFormSubmissionValue((prevState) => ({
						...prevState,
						[field.code]: fieldValue,
					}));
					console.log(formSubmissionValue);
				}}
			/>
		));
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormLabel className={classes.label}>Fields</FormLabel>
			{makeFields()}
			<Button variant="outlined" type="submit">
				Submit
			</Button>
		</form>
	);
};

export default InputForm;
