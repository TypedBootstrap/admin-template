import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

const Blank = () => (
    <Container fluid>
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to="/">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Blank Page</BreadcrumbItem>
        </Breadcrumb>
        <h1>Blank Page</h1>
        <hr />
        <p>This is a great starting point for new custom pages.</p>
    </Container>
);

export default Blank;
