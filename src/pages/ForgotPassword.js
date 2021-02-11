import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { ForgotPasswordForm } from '../components/forms';

const ForgotPassword = () => (
    <Container>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card className="mt-5">
                    <CardHeader>Reset Password</CardHeader>
                    <CardBody>
                        <div className="text-center mb-4">
                            <h4>Forgot your password?</h4>
                            <p>
                                Enter your email address and we will send you instructions on how to
                                reset your password.
                            </p>
                        </div>
                        <ForgotPasswordForm />
                        <div className="text-center">
                            <Link className="d-block small mt-3" to="register">
                                Register an Account
                            </Link>
                            <Link className="d-block small" to="login">
                                Login Page
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default ForgotPassword;
