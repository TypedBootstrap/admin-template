import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const LoginForm = () => (
    <Form>
        <FormGroup>
            <div className="form-label-group">
                <Input
                    type="email"
                    id="inputEmail"
                    placeholder="Email address"
                    required="required"
                    autoFocus
                />
                <Label for="inputEmail">Email address</Label>
            </div>
        </FormGroup>
        <FormGroup>
            <div className="form-label-group">
                <Input
                    type="password"
                    id="inputPassword"
                    placeholder="Password"
                    required="required"
                />
                <Label for="inputPassword">Password</Label>
            </div>
        </FormGroup>
        <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
                Remember Password
            </Label>
        </FormGroup>
        <Button tag={Link} block color="primary" to="/">
            Login
        </Button>
    </Form>
);

export default LoginForm;
