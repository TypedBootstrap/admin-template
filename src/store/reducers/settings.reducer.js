import { CHANGE_SETTING, TOGGLE_SETTING } from 'config/actions';

const INITIAL_STATE = {
    sidebarToggled: false,
};

const settingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_SETTING:
            return { ...state, [action.payload.name]: action.payload.value };

        case TOGGLE_SETTING:
            return { ...state, [action.payload.name]: !state[action.payload.name] };

        default:
            return state;
    }
};

export default settingsReducer;
