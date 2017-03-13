
import React from 'react';
import { Form, Field, WithFormProp } from '../src';
import { required, minLength } from './validators';

const handleCommentFormSubmit = (values) => console.log('submit', values);
const handleCommentFormSuccess = () => console.log('success');
const handleCommentFormFail = () => console.log('fail');

const renderCommentFormField = ({ type, ...props }, { error, isTouched }) => {
	let inputElem;

	switch (type) {
		case 'textarea':
			inputElem = <textarea {...props} rows="5" />;
			break;

		default:
			inputElem = <input {...props} type={type} />;
			break;
	}

	return (
		<div className="form__field">
			{inputElem}
			<br />
			{isTouched && error && (
				<small>{error}</small>
			)}
		</div>
	);
};

const App = () => (
	<Form
		className="form"
		onSubmit={handleCommentFormSubmit}
		onSuccess={handleCommentFormSuccess}
		onFail={handleCommentFormFail}
	>
		<div className="form__row">
			<label>Name</label>
			<Field type="text" name="name" validate={[required, minLength(3)]} />
		</div>

		<div className="form__row">
			<label>Email</label>
			<Field type="text" name="email" validate={[required, minLength(3)]} component={renderCommentFormField} />
		</div>

		<div className="form__row">
			<label>Comment</label>
			<Field type="textarea" name="body" validate={required} />
		</div>

		<div className="form__row">
			<label>
				<Field type="checkbox" name="subscribe" />
				Get email notifications
			</label>
		</div>

		<WithFormProp isSubmitting>
			<p>...... I am saving .......</p>
		</WithFormProp>

		<WithFormProp hasErrors={false} isSubmitting={false}>
			<p>...... I have no errors .......</p>
		</WithFormProp>

		<WithFormProp
			component={({ hasErrors, isSubmitting }) => (
				<button type="submit" disabled={isSubmitting || hasErrors}>Send</button>
			)}
		/>
	</Form>
);

export default App;