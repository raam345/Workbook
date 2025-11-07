import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../Features/feedbackslice';

export const store = configureStore({
    reducer: {
        feedback: feedbackReducer,
    },
});