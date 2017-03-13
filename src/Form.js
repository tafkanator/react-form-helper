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
		errors: {},
		touchedFields: [],
		enhancedChildren: [],
		isMounted: false,
		isSubmitting: false,
		...props,
	});

	state = Form.getInitialState();

	componentDidMount = () => {
		this.setState({
			isMounted: true,
		});
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

		console.log('tere', this.getEnhancedChildren(children))

		return (
			<form {...rest} onSubmit={this.handleSubmit}>
				{this.getEnhancedChildren(children)}
			</form>
		);
	};

	handleChange = (validators, e) => {
		const key = e.target.name;
		const value = e.target.value;

		const error = this.isTouched(key) ? this.getFieldErrors(validators, value) : null;

		this.setState({
			fields: update(this.state.fields, { [key]: { $set: value } }),
			errors: update(this.state.errors, { [key]: { $set: error } }),
		});
	}

	handleBlur = (validators, e) => {
		const key = e.target.name;
		const value = e.target.value;

		const newState = {
			errors: update(this.state.errors, { [key]: { $set: this.getFieldErrors(validators, value) } }),
		};

		if (this.state.touchedFields.indexOf(key) === -1) {
			newState.touchedFields = update(this.state.touchedFields, { $push: [key] });
		}

		this.setState(newState);
	}

	handleSubmit = (e) => {
		const {
			fields,
		} = this.state;

		e.preventDefault();

		const response = this.props.onSubmit(fields);

		if (this.isPromise(response)) {
			this.setState({
				isSubmitting: true,
			});

			return response.then(this.handleSuccess, this.handleFail);
		}

		return response;
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
			case Field.name:
				return React.cloneElement(child, {
					isTouched: this.isTouched(child.props.name),
					error: this.state.errors[child.props.name] || null,
					input: {
						onChange: this.handleChange.bind(null, child.props.validate),
						onBlur: this.handleBlur.bind(null, child.props.validate),
						name: child.props.name,
						type: child.props.type,
						value: (child.props.name in this.state.fields)
							? this.state.fields[child.props.name]
							: child.props.defaultValue || '',
					},
				});

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


	isTouched = name => this.state.touchedFields.indexOf(name) !== -1

	getFieldErrors = (validators, value) => {
		if (typeof validators === 'function') {
			return validators(value) || null;
		} else if (Array.isArray(validators)) {
			return validators.map(validator => validator(value)).filter(val => Boolean(val)).join(', ');
		}

		return null;
	}

	reset = () => {
		this.setState(Form.getInitialState({
			isMounted: true,
		}));
	}
}