import React from 'react';
import PropTypes from 'prop-types';
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
    closeColor: PropTypes.string,
    closeText: PropTypes.string,
    confirmAction: PropTypes.func.isRequired,
    confirmColor: PropTypes.string,
    confirmText: PropTypes.string,
    isOpen: PropTypes.bool,
    message: PropTypes.string,
    title: PropTypes.string,
    toggle: PropTypes.func.isRequired
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
