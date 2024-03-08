import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export type PasswordRecoveryFormValues = {
    email: string;
};

export type PasswordRecoveryFormHelpers = FormikHelpers<PasswordRecoveryFormValues>;

export interface PasswordRecoveryFormProps {
    initialValues: PasswordRecoveryFormValues;
    onSubmit: (values: PasswordRecoveryFormValues, helpers: PasswordRecoveryFormHelpers) => void;
}

const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = props => (
    <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
        {form => (
            <Form onSubmit={form.handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        placeholder="name@example.com"
                        value={form.values.email}
                    />
                    <Label for="email">Email address</Label>
                </FormGroup>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <Link className="small" to="/login">
                        Return to login
                    </Link>
                    <Button type="submit" color="primary">
                        Reset Password
                    </Button>
                </div>
            </Form>
        )}
    </Formik>
);

export default PasswordRecoveryForm;
