import React from 'react';
import { bool, func, string } from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/**
 * Alert Modal
 */
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
    closeColor: string,
    closeText: string,
    isOpen: bool,
    message: string,
    title: string,
    toggle: func.isRequired
};

AlertModal.defaultProps = {
    closeColor: 'secondary',
    closeText: 'Close',
    isOpen: false,
    message: null,
    title: null
};

export default AlertModal;
