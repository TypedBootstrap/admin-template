import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { LoginForm } from '../components/forms';

const Login = () => (
    <Container>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card className="mt-5">
                    <CardHeader>Login</CardHeader>
                    <CardBody>
                        <LoginForm />
                        <div className="text-center">
                            <Link className="d-block small mt-3" to="register">
                                Register an Account
                            </Link>
                            <Link className="d-block small" to="forgot-password">
                                Forgot Password?
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Login;
