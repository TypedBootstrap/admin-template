import { HIDE_MODAL, OPEN_MODAL } from 'config/actions';

const INITIAL_STATE = {
    isOpen: false,
    modalProps: {},
    modalType: null
};

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HIDE_MODAL:
            return INITIAL_STATE;

        case OPEN_MODAL:
            return {
                ...INITIAL_STATE,
                isOpen: true,
                modalProps: action.payload.modalProps,
                modalType: action.payload.modalType
            };

        default:
            return state;
    }
};

export default modalReducer;
