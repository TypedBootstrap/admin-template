import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export interface NoMatchPageProps {}

const NoMatchPage: React.FC<NoMatchPageProps> = () => (
    <Container>
        <Row className="justify-content-center">
            <Col lg="6">
                <div className="text-center mt-4">
                    <p className="lead">This requested URL was not found on this server.</p>
                    <Link to="/">
                        <FontAwesomeIcon className="me-1" icon={faArrowLeft} />
                        Return to Dashboard
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
);

export default NoMatchPage;
