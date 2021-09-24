import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import { Field, FieldValue } from "./InputForm";

interface InputFieldProps {
	field: Field;
	submitDataCallback: (currentValue: FieldValue) => void;
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
	submitDataCallback,
	isPendingSubmission,
	showError,
}: InputFieldProps) => {
	const [value, setValue] = useState("");
	const [errorMessage, setErrorMessage] = useState<string | undefined>();

	useEffect(() => {
		if (!isPendingSubmission) {
			return;
		}
		handleSubmit();
	}, [isPendingSubmission]);

	useEffect(() => {
		if (!showError) {
			setErrorMessage("");
			return;
		}
		setErrorMessage(field.validate(field.validators)(value));
	}, [showError]);

	const classes = useStyles({});

	function handleSubmit() {
		submitDataCallback({
			code: field.code,
			name: field.name,
			value: value,
		});
	}

	return (
		<TextField
			disabled={isPendingSubmission}
			variant="outlined"
			label={field.name}
			value={value}
			error={showError && !!errorMessage}
			helperText={errorMessage}
			onChange={(e) => setValue(e.target.value)}
			className={classes.field}
		></TextField>
	);
};

export default InputField;
