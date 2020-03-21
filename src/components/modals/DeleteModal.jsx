import React from 'react';
import { bool, func, string } from 'prop-types';
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
    <Modal className="DeleteModal" isOpen={isOpen} toggle={toggle}>
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
    closeColor: string,
    closeText: string,
    deleteAction: func.isRequired,
    deleteColor: string,
    deleteText: string,
    isOpen: bool,
    message: string.isRequired,
    title: string.isRequired,
    toggle: func.isRequired
};

DeleteModal.defaultProps = {
    closeColor: 'secondary',
    closeText: 'Cancel',
    deleteColor: 'danger',
    deleteText: 'Continue',
    isOpen: false
};

export default DeleteModal;
