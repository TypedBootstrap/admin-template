import React from 'react';
import type { PasswordRecoveryFormHelpers, PasswordRecoveryFormValues } from 'components/organisms';
import { PasswordRecoveryForm } from 'components/organisms';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';

export interface ForgotPasswordPageProps {
    initialPasswordRecoveryFormValues: PasswordRecoveryFormValues;
    onPasswordRecoveryFormSubmit: (
        values: PasswordRecoveryFormValues,
        helpers: PasswordRecoveryFormHelpers
    ) => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = props => (
    <Container>
        <Row className="justify-content-center">
            <Col lg="5">
                <Card className="shadow-lg border-0 rounded-lg mt-5">
                    <CardHeader>
                        <h3 className="text-center font-weight-light my-4">Password Recovery</h3>
                    </CardHeader>
                    <CardBody>
                        <div className="small mb-3 text-muted">
                            Enter your email address and we will send you a link to reset your
                            Password.
                        </div>
                        <PasswordRecoveryForm
                            initialValues={props.initialPasswordRecoveryFormValues}
                            onSubmit={props.onPasswordRecoveryFormSubmit}
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
);

export default ForgotPasswordPage;
