
import React from 'react';
import { Form, Field, WithFormProp } from '../src';
import { required, minLength } from './validators';

const handleCommentFormSubmit = (values) => {
	console.log('submit', values);
	// return false;
};

const handleCommentFormSuccess = () => console.log('success');
const handleCommentFormFail = e => console.log('fail', e);

const renderSelect = (input, { error, isTouched }) => (
	<div className="form__field">
		<select {...input}>
			<option value="18-">&lt; 18</option>
			<option value="18-50">18-50</option>
			<option value="50+">&gt; 50</option>
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
			<Field name="name" validate={[required, minLength(3)]} />
		</div>

		<div className="form__row">
			<label className="form__row__label">Email</label><br />
			<Field type="email" name="email" validate={[required, minLength(3)]} />
		</div>

		<div className="form__row">
			<label className="form__row__label">Comment</label><br />
			<Field type="textarea" name="comment" validate={required} />
		</div>

		<div className="form__row">
			<span className="form__row__label">Gender</span><br />
			<label>
				<Field name="gender" type="radio" value="male" defaultChecked />
				Male
			</label>
			<label>
				<Field name="gender" type="radio" value="female" />
				Female
			</label>
		</div>

		<div className="form__row">
			<label className="form__row__label">Age</label><br />
			<Field name="age" component={renderSelect} defaultValue="18-" />
		</div>

		<div className="form__row">
			<label className="form__row__label">
				<Field type="checkbox" name="subscribeToEmail" />
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