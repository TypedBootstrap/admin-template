# Modals

## Usage
```javascript
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from 'store/actions';
import { Button } from 'reactstrap';

/**
 * Example Page
 */
const ExamplePage = ({ openModal }) => {
    const handleButtonClick = e => {
        e.preventDefault();

        return openModal('alert', {
            title: 'Alert',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        });
    };

    return (
        <div className="ExamplePage">
            <Button type="button" color="primary" onClick={handleButtonClick}>
                Open Modal
            </Button>
        </div>
    );
};

export default connect(null, { openModal })(ExamplePage);
```