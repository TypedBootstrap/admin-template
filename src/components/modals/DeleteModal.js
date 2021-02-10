import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({
    closeColor,
    closeText,
    deleteAction,
    deleteColor,
    deleteText,
    isOpen,
    message,
    title,
    toggle
}) => (
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
            <Button color={closeColor} onClick={toggle}>
                {closeText}
            </Button>{' '}
            <Button color={deleteColor} onClick={deleteAction}>
                {deleteText}
            </Button>
        </ModalFooter>
    </Modal>
);

DeleteModal.propTypes = {
    closeColor: PropTypes.string,
    closeText: PropTypes.string,
    deleteAction: PropTypes.func.isRequired,
    deleteColor: PropTypes.string,
    deleteText: PropTypes.string,
    isOpen: PropTypes.bool,
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
};

DeleteModal.defaultProps = {
    closeColor: 'secondary',
    closeText: 'Cancel',
    deleteColor: 'danger',
    deleteText: 'Continue',
    isOpen: false
};

export default DeleteModal;
