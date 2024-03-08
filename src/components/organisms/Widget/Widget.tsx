import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter } from 'reactstrap';

export interface WidgetProps {
    bg?: string;
    text?: string;
    children?: React.ReactNode;
    className?: string;
    linkLabel: string;
    linkTo: string;
}

const Widget: React.FC<WidgetProps> = props => {
    const { bg, children, className, linkLabel, linkTo, text } = props;

    const classNames: string = classnames({ [`bg-${bg}`]: bg, [`text-${text}`]: text }, className);

    return (
        <Card className={classNames}>
            <CardBody>{children}</CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
                <Link className="small text-white stretched-link" to={linkTo}>
                    {linkLabel}
                </Link>
                <div className="small text-white">
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </CardFooter>
        </Card>
    );
};

export default Widget;
