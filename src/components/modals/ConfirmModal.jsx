import React from 'react';
import { bool, func, string } from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmModal = ({
    closeColor,
    closeText,
    confirmAction,
    confirmColor,
    confirmText,
    isOpen,
    message,
    title,
    toggle
}) => (
    <Modal className="ConfirmModal" isOpen={isOpen}>
        {title && <ModalHeader>{title}</ModalHeader>}
        {message && <ModalBody>{message}</ModalBody>}
        <ModalFooter>
            <Button color={closeColor} onClick={toggle}>
                {closeText}
            </Button>{' '}
            <Button color={confirmColor} onClick={confirmAction}>
                {confirmText}
            </Button>
        </ModalFooter>
    </Modal>
);

ConfirmModal.propTypes = {
    closeColor: string,
    closeText: string,
    confirmAction: func.isRequired,
    confirmColor: string,
    confirmText: string,
    isOpen: bool,
    message: string,
    title: string,
    toggle: func.isRequired
};

ConfirmModal.defaultProps = {
    closeColor: 'secondary',
    closeText: 'Close',
    confirmColor: 'primary',
    confirmText: 'Continue',
    isOpen: false,
    message: null,
    title: null
};

export default ConfirmModal;
