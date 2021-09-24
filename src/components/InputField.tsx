import { Input, TextField } from "@mui/material";
import { useState } from "react";
import { Field, FieldValue } from "./InputForm";

interface InputFieldProps {
	field: Field;
	onSubmit: (currentValue: FieldValue) => void;
	isPendingSubmission: boolean;
	showError: boolean;
}

const InputField = ({
	field,
	onSubmit,
	isPendingSubmission,
	showError,
}: InputFieldProps) => {
	const [value, setValue] = useState("");

	const handleSubmit = () => {
		onSubmit({
			code: field.code,
			name: field.name,
			value: value,
		});
	};

	return (
		<TextField
			disabled={isPendingSubmission}
			variant="outlined"
			label={field.name}
			value={value}
			error={showError && field.validator(value)}
			onChange={(e) => setValue(e.target.value)}
			onSubmit={handleSubmit}
		></TextField>
	);
};

export default InputField;
