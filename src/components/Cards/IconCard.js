import React from 'react';
import PropTypes from 'prop-types';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter } from 'reactstrap';

const IconCard = ({ color, icon, linkText, path, title }) => (
    <div className="IconCard">
        <Card color={color} className="o-hidden h-100">
            <CardBody>
                {icon && (
                    <div className="card-body-icon">
                        <FontAwesomeIcon icon={icon} fixedWidth />
                    </div>
                )}
                <div className="mr-5">{title}</div>
            </CardBody>
            <CardFooter className="text-white clearfix small z-1" tag={Link} to={path}>
                <span className="float-left">{linkText}</span>
                <span className="float-right">
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
            </CardFooter>
        </Card>
    </div>
);

IconCard.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    linkText: PropTypes.string,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

IconCard.defaultProps = {
    color: 'primary',
    linkText: 'View Details'
};

export default IconCard;
