import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AlertModal = ({ closeColor, closeText, isOpen, message, title, toggle }) => (
    <Modal className="AlertModal" isOpen={isOpen}>
        {title && <ModalHeader>{title}</ModalHeader>}
        {message && <ModalBody>{message}</ModalBody>}
        <ModalFooter>
            <Button color={closeColor} onClick={toggle}>
                {closeText}
            </Button>
        </ModalFooter>
    </Modal>
);

AlertModal.propTypes = {
    closeColor: PropTypes.string,
    closeText: PropTypes.string,
    isOpen: PropTypes.bool,
    message: PropTypes.string,
    title: PropTypes.string,
    toggle: PropTypes.func.isRequired
};

AlertModal.defaultProps = {
    closeColor: 'secondary',
    closeText: 'Close',
    isOpen: false,
    message: null,
    title: null
};

export default AlertModal;
