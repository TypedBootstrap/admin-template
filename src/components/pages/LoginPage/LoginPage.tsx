import React from 'react';
import { AuthenticationLayout } from '@typedbootstrap/admin-components';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';
import { Footer, LoginForm } from '../../organisms';

export interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => (
    <AuthenticationLayout footer={<Footer />}>
        <main>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="5">
                        <Card className="shadow-lg border-0 rounded-lg mt-5">
                            <CardHeader>
                                <h3 className="text-center font-weight-light my-4">Login</h3>
                            </CardHeader>
                            <CardBody>
                                <LoginForm />
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
        </main>
    </AuthenticationLayout>
);

export default LoginPage;