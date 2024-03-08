import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
    return (
        <Form>
            <FormGroup className="mb-3" floating>
                <Input id="inputEmail" type="email" placeholder="name@example.com" />
                <Label for="inputEmail">Email address</Label>
            </FormGroup>
            <FormGroup className="mb-3" floating>
                <Input id="inputPassword" type="email" placeholder="Password" />
                <Label for="inputPassword">Password</Label>
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
                <Button type="button" color="primary">
                    Login
                </Button>
            </div>
        </Form>
    );
};

export default LoginForm;
