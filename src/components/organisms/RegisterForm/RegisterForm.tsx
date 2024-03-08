import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
    return (
        <Form>
            <Row>
                <Col md="6">
                    <FormGroup floating>
                        <Input
                            id="inputFirstName"
                            type="text"
                            placeholder="Enter your first name"
                        />
                        <Label for="inputFirstName">First name</Label>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup floating>
                        <Input id="inputLastName" type="text" placeholder="Enter your last name" />
                        <Label for="inputLastName">Last name</Label>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup floating>
                <Input id="inputEmail" type="email" placeholder="name@example.com" />
                <Label for="inputEmail">Email address</Label>
            </FormGroup>
            <Row>
                <Col md="6">
                    <FormGroup floating>
                        <Input id="inputPassword" type="password" placeholder="Create a password" />
                        <Label for="inputPassword">Password</Label>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup floating>
                        <Input
                            id="inputPasswordConfirm"
                            type="password"
                            placeholder="Confirm password"
                        />
                        <Label for="inputPasswordConfirm">Confirm Password</Label>
                    </FormGroup>
                </Col>
            </Row>
            <Button type="button" color="primary" block>
                Create Account
            </Button>
        </Form>
    );
};

export default RegisterForm;
