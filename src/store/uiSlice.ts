import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface UiState {
    [index: string]: boolean;
}

const initialState: UiState = {
    sidebarToggled: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        changeSetting: (state, action: PayloadAction<{ name: string; value: boolean }>) => {
            state[action.payload.name] = action.payload.value;
        },
        toggleSetting: (state, action: PayloadAction<string>) => {
            state[action.payload] = !state[action.payload];
        }
    }
});

export const selectSidebarToggled = (state: RootState) => state.ui.sidebarToggled;

export const { actions: uiActions, reducer: uiReducer } = uiSlice;
