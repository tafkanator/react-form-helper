import { PropTypes } from 'react';

export default function WithFormProp({
	values,
	children,
	component,
	...rest
}) {
	if (component !== undefined) {
		return component(values);
	}

	const shouldNotRender = Object.entries(rest).some(([key, value]) => value !== values[key]);

	return shouldNotRender ? null : children;
}

WithFormProp.propTypes = {
	isSubmitting: PropTypes.bool,
	hasErrors: PropTypes.bool,
	values: PropTypes.object,
	children: PropTypes.any,
	component: PropTypes.func,
};