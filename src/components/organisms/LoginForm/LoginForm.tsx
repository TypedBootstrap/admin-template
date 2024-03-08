import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export type LoginFormValues = {
    email: string;
    password: string;
};

export type LoginFormHelpers = FormikHelpers<LoginFormValues>;

export interface LoginFormProps {
    initialValues: LoginFormValues;
    onSubmit: (values: LoginFormValues, helpers: LoginFormHelpers) => void;
}

const LoginForm: React.FC<LoginFormProps> = props => (
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
                <FormGroup floating>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        placeholder="Password"
                        value={form.values.password}
                    />
                    <Label for="password">Password</Label>
                </FormGroup>
                <FormGroup check>
                    <Input id="inputRememberPassword" type="checkbox" />
                    <Label for="inputRememberPassword" check>
                        Remember Password
                    </Label>
                </FormGroup>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <Link className="small" to="/forgot-password">
                        Forgot Password?
                    </Link>
                    <Button type="submit" color="primary">
                        Login
                    </Button>
                </div>
            </Form>
        )}
    </Formik>
);

export default LoginForm;
