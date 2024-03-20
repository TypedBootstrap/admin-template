import React from 'react';
import { DashboardLayout } from '@typedbootstrap/admin-components';
import { Footer, Sidenav, Topnav, Widget } from 'components/organisms';
import { useAppSelector } from 'hooks';
import { Col, Container, Row } from 'reactstrap';
import { selectSidebarToggled } from 'store/uiSlice';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const sidebarToggled = useAppSelector(selectSidebarToggled);

    return (
        <DashboardLayout
            topnav={<Topnav />}
            sidenav={<Sidenav />}
            sidenavToggled={sidebarToggled}
            footer={<Footer />}>
            <main>
                <Container className="px-4" fluid>
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <Row>
                        <Col xl="3" md="6">
                            <Widget
                                bg="primary"
                                className="mb-4"
                                linkLabel="View Details"
                                linkTo="/"
                                text="white">
                                Primary Card
                            </Widget>
                        </Col>
                        <Col xl="3" md="6">
                            <Widget
                                bg="warning"
                                className="mb-4"
                                linkLabel="View Details"
                                linkTo="/"
                                text="white">
                                Warning Card
                            </Widget>
                        </Col>
                        <Col xl="3" md="6">
                            <Widget
                                className="mb-4"
                                bg="success"
                                linkLabel="View Details"
                                linkTo="/"
                                text="white">
                                Success Card
                            </Widget>
                        </Col>
                        <Col xl="3" md="6">
                            <Widget
                                className="mb-4"
                                bg="danger"
                                linkLabel="View Details"
                                linkTo="/"
                                text="white">
                                Danger Card
                            </Widget>
                        </Col>
                    </Row>
                </Container>
            </main>
        </DashboardLayout>
    );
};

export default HomePage;
