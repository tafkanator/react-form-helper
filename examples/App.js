
import React from 'react';
import { Form, Field, WithFormProp } from '../src';
import { required, minLength, requiredIfHasField } from './validators';

const handleCommentFormSubmit = (values) => {
	console.log('submit', values);
	// return false;
};

const handleCommentFormSuccess = reset => reset();
const handleCommentFormFail = e => console.log('fail', e);

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
		<div className="form__row">
			<label className="form__row__label">Name</label>
			<Field name="name" validate={[required, minLength(3)]} />
		</div>

		<div className="form__row">
			<label className="form__row__label">Email</label>
			<Field type="email" name="email" validate={requiredIfHasField('subscribeToEmail')} />
		</div>

		<div className="form__row">
			<label className="form__row__label">
				<Field type="checkbox" name="subscribeToEmail" onChange={(e, validate) => { validate('email'); }} />
				Get email notifications
			</label>
		</div>

		<div className="form__row">
			<label className="form__row__label">Comment</label>
			<Field type="textarea" name="comment" validate={required} />
		</div>

		<div className="form__row">
			<span className="form__row__label">Gender</span>
			<label className="form__row__option">
				<Field name="gender" type="radio" value="male" defaultChecked />
				Male
			</label>
			<label className="form__row__option">
				<Field name="gender" type="radio" value="female" />
				Female
			</label>
		</div>

		<div className="form__row">
			<label className="form__row__label">Age</label>
			<Field name="age" component={renderSelect} defaultValue="18-" />
		</div>

		<div className="form__row">
			<Field
				name="programmingSkill"
				type="range"
				label="Programming skill level"
				defaultValue={5}
				component={renderRange}
				transform={value => parseInt(value, 10)}
			/>
		</div>

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