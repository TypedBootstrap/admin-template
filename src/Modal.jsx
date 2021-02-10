import React from 'react';
import modals from 'config/modals';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'store/actions';

/**
 * Modal
 */
const Modal = () => {
    const dispatch = useDispatch();
    const { isOpen, modalProps, modalType } = useSelector(state => state.modal);

    if (!modalType) {
        return null;
    }

    const Modal = modals[modalType];

    if (typeof Modal === 'undefined') {
        return null;
    }

    return <Modal isOpen={isOpen} toggle={() => dispatch(hideModal())} {...modalProps} />;
};

export default Modal;
