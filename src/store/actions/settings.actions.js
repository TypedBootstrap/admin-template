import { CHANGE_SETTING, TOGGLE_SETTING } from 'constants/actions';

/**
 * Change a setting value
 */
export const changeSetting = (name, value) => dispatch =>
    dispatch({
        type: CHANGE_SETTING,
        payload: { name, value }
    });

/**
 * Toggle a setting value (only boolean)
 */
export const toggleSetting = name => dispatch =>
    dispatch({
        type: TOGGLE_SETTING,
        payload: { name }
    });
