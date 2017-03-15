import React, { Component, PropTypes } from 'react';
import update from 'immutability-helper';

import Field from './Field';
import WithFormProp from './WithFormProp';

export default class Form extends Component {

	static propTypes = {
		children: PropTypes.any.isRequired,
		onSubmit: PropTypes.func.isRequired,
		onSuccess: PropTypes.func,
		onFail: PropTypes.func,
	}

	static getInitialState = (props = {}) => ({
		fields: {},
		values: {},
		errors: {},
		touchedFields: [],
		isMounted: false,
		isSubmitting: false,
		...props,
	});

	state = Form.getInitialState();

	componentWillMount = () => {
		this.reset();
	}

	componentWillUnmount = () => {
		this.setState({
			isMounted: false,
		});
	}

	render = () => {
		const {
			children,
			onSubmit, // eslint-disable-line no-unused-vars
			onSuccess, // eslint-disable-line no-unused-vars
			onFail, // eslint-disable-line no-unused-vars
			...rest
		} = this.props;

		return (
			<form {...rest} onSubmit={this.handleSubmit}>
				{this.getEnhancedChildren(children)}
			</form>
		);
	};

	handleChange = (validators, e) => {
		const {
			values,
			errors,
		} = this.state;

		const key = e.target.name;
		const value = this.getFieldValue(e.target);
		const error = this.isTouched(key) ? this.getFieldErrors(this.getFieldName(e.target), value) : null;

		this.setState({
			values: update(values, { [key]: { $set: value } }),
			errors: update(errors, { [key]: { $set: error } }),
		});
	}

	handleBlur = (validators, e) => {
		const {
			errors,
			touchedFields,
		} = this.state;

		const key = e.target.name;
		const value = this.getFieldValue(e.target);

		this.setState({
			errors: update(errors, { [key]: { $set: this.getFieldErrors(this.getFieldName(e.target), value) } }),
			touchedFields: touchedFields.indexOf(key) === -1
				? update(touchedFields, { $push: [key] })
				: touchedFields,
		});
	}

	handleSubmit = (e) => {
		const {
			values,
		} = this.state;

		e.preventDefault();

		// do not submit if we have invalid values
		if (this.checkFormErrors()) {
			return;
		}

		// submit form
		const response = this.props.onSubmit(values);

		// setup async response listeners
		if (this.isPromise(response)) {
			this.setState({
				isSubmitting: true,
			});

			response.then(this.handleSuccess, this.handleFail);
		} else if (response === true || response === undefined) {
			this.handleSuccess();
		} else {
			this.handleFail(response);
		}
	}

	handleSuccess = () => {
		const {
			onSuccess,
		} = this.props;

		if (this.state.isMounted && onSuccess !== undefined) {
			this.setState({
				isSubmitting: false,
			});

			onSuccess(this.reset);
		}
	}

	handleFail = (e) => {
		const {
			onFail,
		} = this.props;

		if (this.state.isMounted && onFail !== undefined) {
			const newState = {
				isSubmitting: false,
			};

			const errors = onFail(e);

			if (errors !== undefined) {
				newState.errors = errors;
				newState.touchedFields = Object.keys(errors);
			}

			this.setState(newState);
		}
	}

	isPromise = val => val && typeof val.then === 'function';

	getInstanceOf = (child) => {
		if (!child || !child.type) {
			return null;
		}

		return child.type.name;
	}

	getEnhancedChildren = children => React.Children.map(children, (child) => {
		switch (this.getInstanceOf(child)) {
			case Field.name: {
				const input = {
					onChange: this.handleChange.bind(null, child.props.validate),
					onBlur: this.handleBlur.bind(null, child.props.validate),
					name: child.props.name,
					type: child.props.type,
				};

				if (child.props.type === 'radio') {
					input.value = child.props.value;
					input.checked = this.state.values[child.props.name] === child.props.value;
				} else {
					input.value = this.state.values[child.props.name];
				}

				// enhance element
				return React.cloneElement(child, {
					isTouched: this.isTouched(child.props.name),
					error: this.state.errors[child.props.name] || null,
					input,
				});
			}

			case WithFormProp.name:
				return React.cloneElement(child, {
					values: {
						hasErrors: Object.values(this.state.errors).filter(value => Boolean(value)).length > 0,
						isSubmitting: this.state.isSubmitting,
					},
				});

			default:
				return child.props && child.props.children
					? React.cloneElement(child, { children: this.getEnhancedChildren(child.props.children) })
					: child;
		}
	});

	getFields = (children = this.props.children, formFields = {}) => {
		let fields = formFields;

		React.Children.forEach(children, (child) => {
			if (!child.props) {
				return;
			}

			if (child.props.children) {
				// if nested, go deeper
				fields = update(fields, { $merge: this.getFields(child.props.children, fields) });
			} else if (this.getInstanceOf(child) === Field.name) {
				// if it is field, create reference for it
				this.validateFieldProps(child, fields);

				if (child.props.type === 'radio') {
					fields[`${child.props.name}-${child.props.value}`] = child;
				} else {
					fields[child.props.name] = child;
				}
			}
		});

		return fields;
	}

	validateFieldProps = (child, fields) => {
		if (process.env.NODE_ENV === 'production') {
			return;
		}

		if (child.props.type === 'radio' && child.props.value === undefined) {
			// eslint-disable-next-line no-console
			console.error(
				`Warning: Field with name "${child.props.name}" does not have prop "value".`,
			);
		}

		if (child.props.name in fields && child.props.type !== 'radio') {
			// eslint-disable-next-line no-console
			console.error(
				`Warning: Field with name "${child.props.name}" already exists. Use different value for name`,
			);
		}
	}

	isTouched = name => this.state.touchedFields.indexOf(name) !== -1;

	checkFormErrors = () => {
		const {
			touchedFields,
			fields,
			values,
		} = this.state;

		const errors = Object.keys(fields).reduce((obj, name) => {
			const error = this.getFieldErrors(name, values[name]);

			if (error) {
				obj[name] = error; // eslint-disable-line no-param-reassign
			}

			return obj;
		}, {});

		this.setState({
			errors,
			touchedFields: update(touchedFields, { $merge: Object.keys(errors) }),
		});

		return Object.keys(errors).length > 0;
	}

	getFieldErrors = (fieldName, value) => {
		const validators = this.state.fields[fieldName].props.validate;

		if (typeof validators === 'function') {
			return validators(value) || null;
		} else if (Array.isArray(validators)) {
			return validators.map(validator => validator(value)).filter(val => Boolean(val)).join(', ');
		}

		return null;
	}

	getFieldInitialValue = (props, values) => {
		if (props.type === 'checkbox') {
			return !!props.defaultChecked;
		}

		if (props.type === 'radio') {
			if (props.defaultChecked) {
				return props.value;
			}

			return props.name in values ? values[props.name] : undefined;
		}

		if (props.defaultValue !== undefined) {
			return props.defaultValue;
		}

		return '';
	}

	getFieldName = field => (field.type === 'radio' ? `${field.name}-${field.value}` : field.name);

	getFieldValue = field => (field.type === 'checkbox' ? field.checked : field.value);

	reset = () => {
		const fields = this.getFields();

		this.setState(Form.getInitialState({
			fields,
			values: Object.values(fields).reduce((values, field) =>
				update(values, { [field.props.name]: { $set: this.getFieldInitialValue(field.props, values) } }),
				{},
			),
			isMounted: true,
		}));
	}
}