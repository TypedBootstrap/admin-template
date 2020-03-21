import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from 'store/actions';
import { AlertModal, ConfirmModal, DeleteModal } from 'components/modals';

/**
 * Modal
 */
const Modal = ({ isOpen, modalProps, modalType, hideModal }) => {
    if (!modalType) {
        return null;
    }

    const MODAL_TYPES = {
        alert: AlertModal,
        confirm: ConfirmModal,
        delete: DeleteModal
    };

    const Modal = MODAL_TYPES[modalType];

    if (typeof Modal === 'undefined') {
        return null;
    }

    return <Modal isOpen={isOpen} toggle={hideModal} {...modalProps} />;
};

const mapStateToProps = store => ({ ...store.modal });

export default connect(mapStateToProps, { hideModal })(Modal);
