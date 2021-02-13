import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { RegisterForm } from '../forms';

const Register = () => (
    <Container>
        <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Card className="mx-auto mt-5">
                    <CardHeader>Register an Account</CardHeader>
                    <CardBody>
                        <RegisterForm />
                        <div className="text-center">
                            <Link className="d-block small mt-3" to="/login">
                                Login Page
                            </Link>
                            <Link className="d-block small" to="/forgot-password">
                                Forgot Password?
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Register;
