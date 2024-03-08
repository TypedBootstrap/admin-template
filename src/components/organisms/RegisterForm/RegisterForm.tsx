import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export type RegisterFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

export type RegisterFormHelpers = FormikHelpers<RegisterFormValues>;

export interface RegisterFormProps {
    initialValues: RegisterFormValues;
    onSubmit: (values: RegisterFormValues, helpers: RegisterFormHelpers) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = props => (
    <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
        {form => (
            <Form onSubmit={form.handleSubmit}>
                <Row>
                    <Col md="6">
                        <FormGroup floating>
                            <Input
                                id="firstName"
                                type="text"
                                name="firstName"
                                onBlur={form.handleBlur}
                                onChange={form.handleChange}
                                placeholder="Enter your first name"
                                value={form.values.firstName}
                            />
                            <Label for="firstName">First name</Label>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup floating>
                            <Input
                                id="lastName"
                                type="text"
                                name="lastName"
                                onBlur={form.handleBlur}
                                onChange={form.handleChange}
                                placeholder="Enter your last name"
                                value={form.values.lastName}
                            />
                            <Label for="lastName">Last name</Label>
                        </FormGroup>
                    </Col>
                </Row>
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
                <Row>
                    <Col md="6">
                        <FormGroup floating>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                onBlur={form.handleBlur}
                                onChange={form.handleChange}
                                placeholder="Create a password"
                                value={form.values.password}
                            />
                            <Label for="password">Password</Label>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup floating>
                            <Input
                                id="passwordConfirm"
                                type="password"
                                name="passwordConfirm"
                                onBlur={form.handleBlur}
                                onChange={form.handleChange}
                                placeholder="Confirm password"
                                value={form.values.passwordConfirm}
                            />
                            <Label for="passwordConfirm">Confirm Password</Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="button" color="primary" block>
                    Create Account
                </Button>
            </Form>
        )}
    </Formik>
);

export default RegisterForm;
