import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FormLabelGroup } from '../common';

const LoginForm = () => (
    <Form>
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
        <FormGroup check>
            <Label check>
                <Input type="checkbox" value="remember-me" />
                Remember Password
            </Label>
        </FormGroup>
        <Button tag={Link} color="primary" block to="/">
            Login
        </Button>
    </Form>
);

export default LoginForm;
