import { combineReducers } from 'redux';
import modal from './modal.reducer';
import settings from './settings.reducer';

export default combineReducers({ modal, settings });
