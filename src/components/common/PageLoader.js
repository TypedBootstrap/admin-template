import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageLoader = () => (
    <div className="page-loader">
        <FontAwesomeIcon className="text-muted" icon={faCircleNotch} size="2x" spin />
    </div>
);

export default PageLoader;
