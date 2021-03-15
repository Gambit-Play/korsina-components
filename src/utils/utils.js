// Convert an array to an object
export const arrayToObject = (array, key) => {
	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, {});
};
