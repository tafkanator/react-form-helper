/* eslint-disable no-console */
import React from 'react';
import { Form, Field, WithFormProp } from '../src';
import { required, minLength, requiredIfHasField } from './validators';

const handleCommentFormSubmit = (values) => {
	console.log('submit', values);
	// return false;
};

const handleCommentFormSuccess = reset => reset();
const handleCommentFormFail = e => console.log('fail', e);

const ageOptions = [
	{ '18-': '18' },
	{ '18-50': '18-50' },
	{ '50+': '> 50' },
];

const renderRange = (input, { error, isTouched, className }) => (
	<div className={className}>
		<label className="form__row__label">Programming skill level: {input.value}</label>
		<input {...input} min="1" max="10" className={`${className}__input`} />

		{isTouched && error && (
			<span className={`${className}__error`}>{error}</span>
		)}
	</div>
);

const App = () => (
	<Form
		className="form"
		onSubmit={handleCommentFormSubmit}
		onSuccess={handleCommentFormSuccess}
		onFail={handleCommentFormFail}
	>
		<h1 className="form__header">Register</h1>

		<Field name="name" label="Name" validate={[required, minLength(3)]} />

		<Field type="email" name="email" label="Email" validate={requiredIfHasField('subscribeToEmail')} />

		<div className="field">
			<label className="field__label">
				<Field type="checkbox" name="subscribeToEmail" onChange={(e, validate) => { validate('email'); }} />
				Get email notifications
			</label>
		</div>

		<Field type="textarea" name="comment" label="Comment" validate={required} />

		<div className="field">
			<span className="field__label">Gender</span>
			<label className="field__option">
				<Field name="gender" type="radio" value="male" defaultChecked />
				Male
			</label>
			<label className="field__option">
				<Field name="gender" type="radio" value="female" />
				Female
			</label>
		</div>

		<Field name="age" label="Age" type="select" options={ageOptions} defaultValue={ageOptions[0]} />

		<Field
			name="programmingSkill"
			type="range"
			label="Programming skill level"
			defaultValue={5}
			component={renderRange}
			transform={value => parseInt(value, 10)}
		/>

		<div className="form__actions">
			<WithFormProp isSubmitting>
				<span>saving...</span>
			</WithFormProp>

			<WithFormProp hasErrors>
				<span>Please review your form</span>
			</WithFormProp>

			<WithFormProp
				component={({ hasErrors, isSubmitting }) => (
					<button className="btn" type="submit" disabled={isSubmitting || hasErrors}>Send</button>
				)}
			/>
		</div>
	</Form>
);

export default App;