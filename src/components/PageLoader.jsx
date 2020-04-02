import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

/**
 * Page Loader
 */
const PageLoader = () => (
    <div className="PageLoader">
        <FontAwesomeIcon className="text-muted" icon={faCircleNotch} size="2x" spin />
    </div>
);

export default PageLoader;
