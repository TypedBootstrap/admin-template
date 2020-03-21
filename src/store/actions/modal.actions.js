import { HIDE_MODAL, OPEN_MODAL } from 'config/actions';

/**
 * Open a modal by type
 */
export const openModal = (modalType, modalProps) => dispatch =>
    dispatch({
        type: OPEN_MODAL,
        payload: { modalProps, modalType }
    });

/**
 * Hide modal
 */
export const hideModal = () => dispatch =>
    dispatch({
        type: HIDE_MODAL
    });
