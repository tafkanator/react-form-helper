import React, { Component, PropTypes } from 'react';

export default class Field extends Component {

	static propTypes = {
		component: PropTypes.func,
		isTouched: PropTypes.bool,
		error: PropTypes.string,
		validate: PropTypes.oneOfType([PropTypes.func, PropTypes.arrayOf(PropTypes.func)]),
		name: PropTypes.string.isRequired,
		type: PropTypes.string,
		defaultValue: PropTypes.any,
		value: PropTypes.any,
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
			name, // eslint-disable-line no-unused-vars
			type, // eslint-disable-line no-unused-vars
			defaultValue, // eslint-disable-line no-unused-vars
			defaultChecked, // eslint-disable-line no-unused-vars
			...rest
		} = this.props;

		if (typeof component === 'function') {
			return component(input, rest);
		}

		return this.renderInput(input, rest);
	}

	renderInput = ({ type, ...props }, { isTouched, error, className }) => (
		<span className={isTouched && error ? `${className} ${className}--has-errors` : className}>
			{type === 'textarea'
				? (<textarea className={`${className}__input`} {...props} />)
				: (<input className={`${className}__input`} type={type || 'text'} {...props} />)
			}

			{isTouched && error && (
				<span className={`${className}__error`}>{error}</span>
			)}
		</span>
	);
}