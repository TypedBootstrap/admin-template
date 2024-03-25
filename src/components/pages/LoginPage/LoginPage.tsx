import React from 'react';
import type { LoginFormHelpers, LoginFormValues } from 'components/organisms';
import { LoginForm } from 'components/organisms';
import { AuthenticationTemplate } from 'components/templates';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';

export interface LoginPageProps {
    initialLoginFormValues: LoginFormValues;
    onLoginFormSubmit: (values: LoginFormValues, helpers: LoginFormHelpers) => void;
}

const LoginPage: React.FC<LoginPageProps> = props => (
    <AuthenticationTemplate>
        <Container>
            <Row className="justify-content-center">
                <Col lg="5">
                    <Card className="shadow-lg border-0 rounded-lg mt-5">
                        <CardHeader>
                            <h3 className="text-center font-weight-light my-4">Login</h3>
                        </CardHeader>
                        <CardBody>
                            <LoginForm
                                initialValues={props.initialLoginFormValues}
                                onSubmit={props.onLoginFormSubmit}
                            />
                        </CardBody>
                        <CardFooter className="text-center py-3">
                            <Link className="small" to="/register">
                                Need an account? Sign up!
                            </Link>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    </AuthenticationTemplate>
);

export default LoginPage;
