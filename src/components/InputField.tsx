import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { theme } from "../theme";
import { Field, FieldValue } from "./InputForm";

interface InputFieldProps {
	field: Field;
	onSubmit: (currentValue: FieldValue) => void;
	isPendingSubmission: boolean;
	showError: boolean;
}

const useStyles = makeStyles({
	field: {
		marginBottom: theme.spacing(3),
	},
});

const InputField = ({
	field,
	onSubmit,
	isPendingSubmission,
	showError,
}: InputFieldProps) => {
	const [value, setValue] = useState("");

	const classes = useStyles({});

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
			className={classes.field}
		></TextField>
	);
};

export default InputField;
