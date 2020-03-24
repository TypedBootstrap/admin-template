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

##
```javascript
import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
 * Login Modal
 */
const LoginModal = ({ isOpen, onSubmit, toggle }) => {
    const [values, setValues] = useState({ username: '', password: '' });

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const { username, password } = values;

        onSubmit({ username, password });
    };

    return (
        <Modal className="LoginModal" centered isOpen={isOpen}>
            <ModalHeader>Welcome Back!</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleInputChange}
                            placeholder="Enter a username"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            placeholder="Enter a password"
                        />
                    </FormGroup>
                    <Button color="primary" type="submit" onClick={handleSubmit} block>
                        Login
                    </Button>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" className="mr-auto" onClick={toggle}>
                    Cancel
                </Button>{' '}
                <Link to="/reset-password">Forgotten Password?</Link>
            </ModalFooter>
        </Modal>
    );
};

LoginModal.propTypes = {
    isOpen: bool.isRequired,
    onSubmit: func.isRequired,
    toggle: func.isRequired
};

export default LoginModal;
```

```javascript
import LoginModal from 'components/modals/LoginModal';

export default {
    login: LoginModal
};
```

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

        return openModal('login', {
            onSubmit: ({ username, password }) => console.log({ username, password })
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