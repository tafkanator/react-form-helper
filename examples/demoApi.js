import { required, minLength } from './validators';

const getFormErrors = ({ name, body }) => {
	const validationErrors = {
		name: required(name) || minLength(5)(name),
		body: required(body),
	};

	return Object.values(validationErrors).filter(value => Boolean(value)).length > 0
		? { validationErrors }
		: false;
};

export const submit = (params) => {
	const promise = new Promise();
	const errors = getFormErrors(params);

	window.setTimeout(() => {
		if (errors) {
			promise.reject({
				validationErrors: errors,
			});
		} else {
			promise.resolve();
		}
	}, 1500);

	return promise;
};