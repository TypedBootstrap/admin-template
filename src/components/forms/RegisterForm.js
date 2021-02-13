import { Link } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const RegisterForm = () => (
    <Form>
        <Row form>
            <Col md="6">
                <FormGroup>
                    <div className="form-label-group">
                        <Input
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            required="required"
                            autoFocus
                        />
                        <Label for="firstName">First name</Label>
                    </div>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <div className="form-label-group">
                        <Input
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            required="required"
                        />
                        <Label for="lastName">Last name</Label>
                    </div>
                </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <div className="form-label-group">
                <Input
                    type="email"
                    id="inputEmail"
                    placeholder="Email address"
                    required="required"
                />
                <Label for="inputEmail">Email address</Label>
            </div>
        </FormGroup>
        <Row form>
            <Col md="6">
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
            </Col>
            <Col md="6">
                <FormGroup>
                    <div className="form-label-group">
                        <Input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm password"
                            required="required"
                        />
                        <Label for="confirmPassword">Confirm password</Label>
                    </div>
                </FormGroup>
            </Col>
        </Row>
        <Button tag={Link} block color="primary" to="/login">
            Register
        </Button>
    </Form>
);

export default RegisterForm;
