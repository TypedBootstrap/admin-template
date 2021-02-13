import { TOGGLE_SETTING } from '../../constants/actions';

export const toggleSetting = name => ({
    type: TOGGLE_SETTING,
    payload: { name }
});
