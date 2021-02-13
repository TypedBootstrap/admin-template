import { TOGGLE_SETTING } from '../../constants/actions';

const initialState = {
    sidebarToggled: false
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SETTING:
            return { ...state, [action.payload.name]: !state[action.payload.name] };

        default:
            return state;
    }
};

export default uiReducer;
