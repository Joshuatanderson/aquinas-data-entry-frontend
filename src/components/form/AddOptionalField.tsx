import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { optionalFields } from "../../data/optionalFields";
import { theme } from "../../theme";
import { Field } from "./InputForm";

const useStyles = makeStyles({
	cont: {
		marginTop: theme.spacing(3),
		display: "flex",
		alignItems: "center",
	},
});

interface AddOptionalFieldProps {
	addActiveField: (field: Field) => void;
}

const AddOptionalField = ({ addActiveField }: AddOptionalFieldProps) => {
	const [value, setValue] = useState("");

	const classes = useStyles();

	const handleChange = (e: SelectChangeEvent) => {
		setValue(e.target.value);
	};

	const handleAdd = () => {
		const fieldToAdd = optionalFields.find((field) => field.code === value);
		if (!fieldToAdd) {
			return;
		}
		addActiveField(fieldToAdd);
		setValue("");
	};

	const createMenuOptions = () =>
		optionalFields.map((field, index) => (
			<MenuItem value={field.code} key={`${field.code}${index}`}>
				{field.name}
			</MenuItem>
		));
	return (
		<Grid container spacing={3} className={classes.cont}>
			<Grid item xs={8}>
				<FormControl fullWidth>
					<InputLabel id="select-optional-label">Optional field</InputLabel>
					<Select
						labelId="select-optional-label"
						id="select-optional"
						value={value}
						onChange={handleChange}
					>
						{createMenuOptions()}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={4}>
				<Button variant="outlined" onClick={handleAdd}>
					+ Add
				</Button>
			</Grid>
		</Grid>
	);
};

export default AddOptionalField;
