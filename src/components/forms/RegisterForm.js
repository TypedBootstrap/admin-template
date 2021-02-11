import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { FormLabelGroup } from '../common';

const RegisterForm = () => (
    <Form>
        <Row form>
            <Col md="6">
                <FormGroup>
                    <FormLabelGroup>
                        <Input
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            required="required"
                        />
                        <Label for="firstName">First name</Label>
                    </FormLabelGroup>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <FormLabelGroup>
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            required="required"
                        />
                        <Label for="lastName">Last name</Label>
                    </FormLabelGroup>
                </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <FormLabelGroup>
                <Input
                    type="email"
                    id="inputEmail"
                    placeholder="Email address"
                    required="required"
                />
                <Label for="inputEmail">Email address</Label>
            </FormLabelGroup>
        </FormGroup>
        <Row form>
            <Col md="6">
                <FormGroup>
                    <FormLabelGroup>
                        <Input
                            type="password"
                            id="inputPassword"
                            placeholder="Password"
                            required="required"
                        />
                        <Label for="inputPassword">Password</Label>
                    </FormLabelGroup>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <FormLabelGroup>
                        <Input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            required="required"
                        />
                        <Label for="confirmPassword">Confirm password</Label>
                    </FormLabelGroup>
                </FormGroup>
            </Col>
        </Row>
        <Button tag={Link} color="primary" block to="login">
            Register
        </Button>
    </Form>
);

export default RegisterForm;
