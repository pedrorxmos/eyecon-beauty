export const strip = (value: string) => {
	return value.trim().replaceAll(/\s+/g, ' ');
};
