import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
  },
});

export default store;
