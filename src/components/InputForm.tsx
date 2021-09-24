import {
	FormControl,
	FormHelperText,
	FormLabel,
	inputAdornmentClasses,
} from "@mui/material";
import React, { useState } from "react";
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

const requiredFields = [
	{
		code: "Location 1",
		name: "Location 1",
		validator: (input: string) => !!input.match(/^[a-zA-Z0-9_.- ]*$/),
	},
];

const InputForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showErrors, setShowErrors] = useState(false);
	const [formSubmissionValue, setFormSubmissionValue] = useState({});

	const makeFields = requiredFields.map((field) => (
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

	return (
		<FormControl>
			<FormLabel>Fields</FormLabel>
		</FormControl>
	);
};

export default InputForm;
