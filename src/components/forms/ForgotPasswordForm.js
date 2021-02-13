import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const ForgotPasswordForm = () => (
    <Form>
        <FormGroup>
            <div className="form-label-group">
                <Input
                    type="email"
                    id="inputEmail"
                    placeholder="Enter email address"
                    required="required"
                    autoFocus
                />
                <Label for="inputEmail">Enter email address</Label>
            </div>
        </FormGroup>
        <Button tag={Link} block color="primary" to="/login">
            Reset Password
        </Button>
    </Form>
);

export default ForgotPasswordForm;
