import React from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/**
 * Search Form
 */
const SearchForm = () => (
    <Form className="d-none d-md-inline-block ml-auto mr-0 mr-md-3 my-2 my-md-0" inline>
        <InputGroup>
            <Input type="text" placeholder="Search for..." />
            <InputGroupAddon addonType="append">
                <Button color="primary" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </Form>
);

export default SearchForm;
