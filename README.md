# React form

A library to help build forms in React faster:
* manages form state by itself
* helps with field validation (client and server side)
* helps with async form submitting

```javascript
import React from 'react';
import { Form, Field } from 'react-form';

const Form = () => (
	<Form onSubmit={(values) => { /* { firstName: '', lastName: '' } */ }}>
		<Field name="firstName" />
		<Field name="lastName" />

		<button type="submit">Submit</submit>
	</Form>
);

export default Form;
```

## Table of contents

* [Components](#components)
* [How validation works](#how-validation-works)
* [Examples](#examples)


## Components

### `<Form />`
This is for wrapping all form. It stores all form state. It also gives callbacks for `onSubmit`, `onSuccess` and `onError`

#### possible values
```javascript
<Form
	className="form"
	onSubmit={(values) => { /* return promise, object with errors, true, false or nothing here */ }}
	onSuccess={(reset) => { reset(); /* reset form values */ } }
	onFail={(e) => { return e.validationErrors; /* return object where key is field name and value is error message */ } }
>
	children
</Form>
```

### `<Field />`
A single input. It can be any input or even custom component.

| Prop | description | default |
|------|-------------|---------|
| name | used as a key for storing value. This field is required and have to be unique |
| type | any input type eg: `number`, `range`, `email`, `textarea`, `checkbox`, `radio` ... | text
| defaultValue | initial field value | ""
| defaultChecked | initial field value for checkbox | false
| className | css class. If default renderer is used, it will generate following classNames: `field`, `field--has-errors`, `field__input`, `field__error`. If className is provided, `field` will be replaced | field |
| validate | callback for validating input value. Can be function or array of functions. Function must return error string or `undefined` |
| component | This is used for rendering custom JSX instead default one. It gives two sets of parameters: input - required for making state updating to work,  props - error, isTouched, className and any other custom parameter defined in `<Field />` |
| onChange | callback whenever input value changes. it gives tow parameters: `event` and `validate(fieldName)`. validate can be used to trigger validation for another field |
| onBlur | callback whenever input is blurred. It gives one parameter: `event` |

#### possible values
```javascript
<Field
	name="requiredString"
	type="number"
	className="my-input"
	defaultValue={7}
	component={(input, props) => {}}
	validate={(name, values) => values[name] < 1 && 'Has to be positive integer'}
	transform={value => parseInt(value, 10)}
	{...customProps}
/>
```

#### example
```javascript
// If using custom component, it is possible to inject any property to component

const renderInput = (input, {label, error, isTouched}) => (
	<div>
		<label for={`input-${input.name}`}>{label}</label>
		<input {...input} id={`input-${input.name}` />
		{isTouched && error && (<span>{error}</span>)}
	</div>
);

const Form = () => (
	<Form onSubmit={(values) => { /* do something with values */ }}>
		<Field name="firstName" label="First name" component={renderInput} />
		<Field name="lastName" label="Last name" component={renderInput} />

		<button type="submit">Submit</submit>
	</Form>
);
```


## `<WithFormProp />`
A way to render something conditionally based on current form state. It's basically a higher order component inside JSX.

| Prop | description |
|------|-------------|
| isSubmitting | true if form `onSubmit` is resolving promise |
| hasErrors | true if any field has errors |
| component |  This is used for rendering custom JSX instead default one. It gives a object with parameters: `isSubmitting`, `hasErrors` |

There are two ways to use it:

```javascript
// renders only if isSubmitting is true.
<WithFormProp isSubmitting>
	<p>Please wait</p>
</WithFormProp>
// Note that condition can also be negative. eg isSubmitting={false}
```

```javascript
// use form props directly
<WithFormProp
	component={({ hasErrors, isSubmitting }) => (
		<button className="btn" type="submit" disabled={isSubmitting || hasErrors}>Send</button>
	)}
/>
```

```javascript
// possible values
<WithFormProp isSubmitting hasErrors={false} component={(values) => {}}>
	children
</WithFormProp>
```

## How validation works

* if field has been touched (input has been blurred at least once or user has tried to submit form), every time value is changed, it will validate itself.
* whenever form is submitted, all validations are run, and if no errors are found, `onSubmit` will be called
* if `onSubmit` returns false, `onError` is called. If promise is returned, it will resolve it, otherwise `onSuccess` is called


## Examples
[Full example can be found here](examples/App.js)

### Custom Field renderer

```javascript
// ...

const renderSelect = (input, { error, isTouched, className }) => (
	<div className={className}>
		<select {...input} className={`${className}__input`}>
			<option value="18-">&lt; 18</option>
			<option value="18-50">18-50</option>
			<option value="50+">&gt; 50</option>
		</select>

		{isTouched && error && (
			<span className={`${className}__error`}>{error}</span>
		)}
	</div>
);

const Form = () => (
	<Form onSubmit={(values) => { /* do something with values */ }}>
		<Field name="age" component={renderSelect} defaultValue="18-" />

		<button type="submit">Submit</submit>
	</Form>
);

// ...
```

### Form validation

First name has to be defined. Last name have to be at least 5 characters long. IF checkbox is checked, email must be defined.
```javascript
// ...

export const required = (name, values) => (values[name] ? undefined : 'Field is required');

const minLength = min => (name, values) =>
	(values[name] && values[name].length < min ? `Must be at least ${min} characters` : undefined);

const requiredIfHasField = fieldName => (name, values) =>
	(values[fieldName] && !values[name] ? 'Field is required' : undefined);

const Form = () => (
	<Form onSubmit={(values) => { /* do something with values */ }}>
		<Field name="firstName" validate={required} />
		<Field name="lastName"  validate={[required, minLength(5)]} />
		<Field type="email" name="email" validate={requiredIfHasField('subscribeToEmail')} />
		<Field type="checkbox" name="subscribeToEmail" onChange={(e, validate) => { validate('email'); }} />

		<button type="submit">Submit</submit>
	</Form>
);

// ...
```

## RUNNING EXAMPLES
* download project:
* run `npm install`
* run `npm start`
* open browser at [localhost:3000](http://localhost:3000)

## TODO
- [ ]  travis integration
- [ ]  tests
- [ ]  improve documentation
- [ ]  better bundle files