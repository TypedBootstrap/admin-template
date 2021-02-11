import React from 'react';
import { AlertModal, ConfirmModal, DeleteModal } from './components/modals';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from './store/actions';

const Modals = {
    alert: AlertModal,
    confirm: ConfirmModal,
    delete: DeleteModal
};

const Modal = () => {
    const dispatch = useDispatch();
    const { isOpen, modalProps, modalType } = useSelector(state => state.modal);

    if (!modalType) {
        return null;
    }

    const Modal = Modals[modalType];

    if (typeof Modal === 'undefined') {
        return null;
    }

    return <Modal isOpen={isOpen} toggle={() => dispatch(hideModal())} {...modalProps} />;
};

export default Modal;
