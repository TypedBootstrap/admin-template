import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export interface PasswordRecoveryFormProps {}

const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = () => {
    return (
        <Form>
            <FormGroup className="mb-3" floating>
                <Input id="inputEmail" type="email" placeholder="name@example.com" />
                <Label for="inputEmail">Email address</Label>
            </FormGroup>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                <Link className="small" to="/login">
                    Return to login
                </Link>
                <Button type="button" color="primary">
                    Reset Password
                </Button>
            </div>
        </Form>
    );
};

export default PasswordRecoveryForm;
