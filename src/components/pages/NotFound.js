import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

const NotFound = () => (
    <Container fluid>
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to="/">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>404 Error</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="display-1">404</h1>
        <p className="lead">
            Page not found. You can <Link to="">go back</Link> to the previous page, or{' '}
            <Link to="/">return home</Link>.
        </p>
    </Container>
);

export default NotFound;
