import { validate } from "../util/validate";

export const requiredFields = [
	{
		code: "Bible book",
		name: "Bible Book",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
				message: "Not a valid name.",
			},
		],
		validate,
	},
	{
		code: "Bible Chapter",
		name: "Bible Chapter",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[\d ]*$/),
				message: "Not a valid number.",
			},
		],
		validate,
	},
	{
		code: "Bible verse",
		name: "Bible Verse",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[\d]*$/),
				message: "Not a valid number.",
			},
		],
		validate,
	},
	{
		code: "Location 1",
		name: "Location 1",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
				message: "Not a valid name.",
			},
		],
		validate,
	},
	{
		code: "Text",
		name: "Text",
		validators: [
			{
				matcher: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
				message: "Not a valid name.",
			},
		],
		validate,
	},
];
