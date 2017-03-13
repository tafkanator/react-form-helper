import React, { Component, PropTypes } from 'react';

export default class Field extends Component {

	static propTypes = {
		component: PropTypes.func,
		isTouched: PropTypes.bool,
		error: PropTypes.string,
		validate: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		defaultValue: PropTypes.any,
		input: PropTypes.shape({
			onChange: PropTypes.func,
			onBlur: PropTypes.func,
			type: PropTypes.any,
			value: PropTypes.any,
		}),
	}

	shouldComponentUpdate = nextProps =>
		this.props.input.value !== nextProps.input.value
		|| this.props.isTouched !== nextProps.isTouched
		|| this.props.error !== nextProps.error;

	render = () => {
		const {
			input,
			component,
			validate,  // eslint-disable-line no-unused-vars
			name, // eslint-disable-line no-unused-vars
			type, // eslint-disable-line no-unused-vars
			defaultValue, // eslint-disable-line no-unused-vars
			...rest
		} = this.props;

		if (typeof component === 'function') {
			return component(input, rest);
		}

		switch (input.type) {
			case 'textarea':
				return this.renderTextArea(input, rest);

			default: return this.renderInput(input, rest);
		}
	}

	renderTextArea = (input, rest) => {
		return (
			<textarea {...input} />
		);
	}

	renderInput = (input, rest) => {
		console.log('rest', rest)
		return (
			<input {...input} />
		);
	}
}