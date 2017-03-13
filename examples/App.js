
import React from 'react';
import { Form, Field, WithFormProp } from '../src';
import { required, minLength } from './validators';

const handleCommentFormSubmit = values => console.log('submit', values);
const handleCommentFormSuccess = () => console.log('success');
const handleCommentFormFail = () => console.log('fail');

const renderSelect = (input, { error, isTouched }) => (
	<div className="form__field">
		<select {...input}>
			<option value="male">male</option>
			<option value="female">female</option>
		</select>

		{isTouched && error && (
			<span className="form__field__error">{error}</span>
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
		<div className="form__row">
			<label className="form__row__label">Name</label><br />
			<Field className="form__row__field" type="text" name="name" validate={[required, minLength(3)]} />
		</div>

		<div className="form__row">
			<label>Email</label><br />
			<Field type="text" name="email" validate={[required, minLength(3)]} />
		</div>

		<div className="form__row">
			<label>Comment</label><br />
			<Field type="textarea" name="body" validate={required} />
		</div>

		<div className="form__row">
			<label>Gender</label><br />
			<Field name="gender" component={renderSelect} defaultValue="female" />
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