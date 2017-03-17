export const required = (name, values) => (values[name] ? undefined : 'Field is required');

export const minLength = min => (name, values) =>
	(values[name] && values[name].length < min ? `Must be at least ${min} characters` : undefined);

export const requiredIfHasField = fieldName => (name, values) =>
	(values[fieldName] && !values[name] ? 'Field is required' : undefined);