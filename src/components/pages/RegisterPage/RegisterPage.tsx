import React from 'react';
import { AuthenticationLayout } from '@typedbootstrap/admin-components';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';
import type { RegisterFormHelpers, RegisterFormValues } from '../../organisms';
import { Footer, RegisterForm } from '../../organisms';

export interface RegisterPageProps {
    initialRegisterFormValues: RegisterFormValues;
    onRegisterFormSubmit: (values: RegisterFormValues, helpers: RegisterFormHelpers) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = props => (
    <AuthenticationLayout footer={<Footer />}>
        <main>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="7">
                        <Card className="shadow-lg border-0 rounded-lg mt-5">
                            <CardHeader>
                                <h3 className="text-center font-weight-light my-4">
                                    Create Account
                                </h3>
                            </CardHeader>
                            <CardBody>
                                <RegisterForm
                                    initialValues={props.initialRegisterFormValues}
                                    onSubmit={props.onRegisterFormSubmit}
                                />
                            </CardBody>
                            <CardFooter className="text-center py-3">
                                <Link className="small" to="/login">
                                    Have an account? Go to login
                                </Link>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    </AuthenticationLayout>
);

export default RegisterPage;
