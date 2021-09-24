export interface Validator {
	matcher: (input: string) => boolean;
	message: string;
}

export const validate = (validators: Validator[]) => (input: string) => {
	let result: string | undefined;
	validators.forEach((validator) => {
		result = validator.matcher(input) ? result : validator.message;
	});
	return result;
};
