import { Card, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Widget = ({ children, color, icon }) => (
    <Card color={color} className="text-white o-hidden h-100">
        <CardBody>
            <div className="card-body-icon">
                <FontAwesomeIcon icon={icon} fixedWidth />
            </div>
            <div className="mr-5">{children}</div>
        </CardBody>
        <CardFooter tag={Link} className="text-white clearfix small z-1" to="/">
            <span className="float-left">View Details</span>
            <span className="float-right">
                <FontAwesomeIcon icon="angle-right" />
            </span>
        </CardFooter>
    </Card>
);

export default Widget;
