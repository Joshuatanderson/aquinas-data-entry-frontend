import { validate } from "../util/validate";

export const optionalFields = [
	{
		code: "Location 2",
		name: "Location 2",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
				message: "Not a valid name.",
			},
		],
		validate,
	},
	{
		code: "Location 3",
		name: "Location 3",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
				message: "Not a valid name.",
			},
		],
		validate,
	},
	{
		code: "Location 4",
		name: "Location 4",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
				message: "Not a valid name.",
			},
		],
		validate,
	},
	{
		code: "Vulgate Chapter",
		name: "Vulgate Chapter",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[\d]*$/),
				message: "Not a valid number.",
			},
		],
		validate,
	},
	{
		code: "Vulgate verse",
		name: "Vulgate Verse",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[\d]*$/),
				message: "Not a valid number.",
			},
		],
		validate,
	},
	{
		code: "yes",
		name: "Corrected",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[y]*$/),
				message: "This field should either be 'y', or not be included.",
			},
		],
		validate,
	},
];
