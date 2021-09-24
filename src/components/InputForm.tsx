import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	inputAdornmentClasses,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { requiredFields } from "../data/requiredFields";
import { theme } from "../theme";
import InputField from "./InputField";
export interface Field {
	code: string;
	name: string;
	validator: (input: string) => boolean;
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
	const [formSubmissionValue, setFormSubmissionValue] = useState({});

	const classes = useStyles();

	const handleSubmit = () => {
		setIsSubmitting(true);
		setShowErrors(false);
	};

	const makeFields = () => {
		return requiredFields.map((field: Field) => (
			<InputField
				field={field}
				isPendingSubmission={isSubmitting}
				showError={showErrors}
				onSubmit={(fieldValue: FieldValue) => {
					setFormSubmissionValue({
						...formSubmissionValue,
						[field.code]: fieldValue,
					});
				}}
			/>
		));
	};

	return (
		<FormControl>
			<FormLabel className={classes.label}>Fields</FormLabel>
			{makeFields()}
			<Button variant="outlined" type="submit" onSubmit={handleSubmit}>
				Submit
			</Button>
		</FormControl>
	);
};

export default InputForm;
