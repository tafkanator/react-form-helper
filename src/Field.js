import React, { Component, PropTypes } from 'react';

export default class Field extends Component {

	static propTypes = {
		component: PropTypes.func,
		isTouched: PropTypes.bool,
		error: PropTypes.string,
		validate: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
		transform: PropTypes.func,
		name: PropTypes.string.isRequired,
		type: PropTypes.string,
		label: PropTypes.string,
		options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
		defaultValue: PropTypes.any,
		value: PropTypes.any,
		onBlur: PropTypes.func,
		onChange: PropTypes.func,
		defaultChecked: PropTypes.bool,
		input: PropTypes.shape({
			onChange: PropTypes.func,
			onBlur: PropTypes.func,
			type: PropTypes.any,
			name: PropTypes.string.isRequired,
			value: PropTypes.any,
			checked: PropTypes.bool,
		}),
	}

	static defaultProps = {
		type: 'text',
		className: 'field',
	};

	shouldComponentUpdate = nextProps =>
		this.props.input.value !== nextProps.input.value
		|| this.props.input.checked !== nextProps.input.checked
		|| this.props.isTouched !== nextProps.isTouched
		|| this.props.error !== nextProps.error;

	render = () => {
		const {
			input,
			component,
			validate,  // eslint-disable-line no-unused-vars
			transform,  // eslint-disable-line no-unused-vars
			name, // eslint-disable-line no-unused-vars
			type, // eslint-disable-line no-unused-vars
			defaultValue, // eslint-disable-line no-unused-vars
			defaultChecked, // eslint-disable-line no-unused-vars
			onBlur, // eslint-disable-line no-unused-vars
			onChange, // eslint-disable-line no-unused-vars
			...rest
		} = this.props;

		if (typeof component === 'function') {
			return component(input, rest);
		}

		return this.renderField(input, rest);
	}

	renderField = (input, { isTouched, error, className, label, options }) => (
		<span className={isTouched && error ? `${className} ${className}--has-errors` : className}>
			{label && (
				<label className={`${className}__label`}>{label}</label>
			)}

			{this.renderInput(input, options, className)}

			{isTouched && error && (
				<span className={`${className}__error`}>{error}</span>
			)}
		</span>
	);

	renderInput = ({ type, ...props }, options, className) => {
		const inputClassName = `${className}__input ${className}__input--${(type || 'text')}`;

		switch (type) {
			case 'textarea': return (
				<textarea className={inputClassName} {...props} />
			);

			case 'select': return (
				<select {...props} className={inputClassName}>
					{options.map((option) => {
						const entries = Object.entries(option);
						const value = entries[0][0];
						const label = entries[0][1];

						return (<option key={value} value={value}>{label}</option>);
					})}
				</select>
			);

			default: return (
				<input className={inputClassName} type={type || 'text'} {...props} />
			);
		}
	}
}