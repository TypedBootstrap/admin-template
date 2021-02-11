import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { FormLabelGroup } from '../common';

const ForgotPasswordForm = () => (
    <Form>
        <FormGroup>
            <FormLabelGroup>
                <Input
                    type="email"
                    id="inputEmail"
                    placeholder="Enter email address"
                    required="required"
                />
                <Label for="inputEmail">Enter email address</Label>
            </FormLabelGroup>
        </FormGroup>
        <Button tag={Link} color="primary" block to="login">
            Reset Password
        </Button>
    </Form>
);

export default ForgotPasswordForm;
