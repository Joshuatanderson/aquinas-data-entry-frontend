export const requiredFields = [
	{
		code: "Location 1",
		name: "Location 1",
		validator: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
	},
	{
		code: "Bible book",
		name: "Bible Book",
		validator: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
	},
	{
		code: "Bible Chapter",
		name: "Bible Chapter",
		validator: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
	},
	{
		code: "Text",
		name: "Text",
		validator: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
	},
	{
		code: "Bible verse",
		name: "Bible Verse",
		validator: (input: string) => !!input.match(/^[a-zA-Z0-9 ]*$/),
	},
];
