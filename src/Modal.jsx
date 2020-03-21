import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from 'store/actions';
import modals from 'config/modals';

/**
 * Modal
 */
const Modal = ({ isOpen, modalProps, modalType, hideModal }) => {
    if (!modalType) {
        return null;
    }

    const Modal = modals[modalType];

    if (typeof Modal === 'undefined') {
        return null;
    }

    return <Modal isOpen={isOpen} toggle={hideModal} {...modalProps} />;
};

const mapStateToProps = store => ({ ...store.modal });

export default connect(mapStateToProps, { hideModal })(Modal);
