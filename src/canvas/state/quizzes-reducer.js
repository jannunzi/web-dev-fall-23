import { createSlice } from "@reduxjs/toolkit";

const quizzes = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: [
      {
        status: "Closed",
        title: "Q1 - HTML",
        dueDate: "May 20 at 11:59pm",
        points: 29,
        questionCount: 11,
      },
      {
        status: "Closed",
        title: "Q2 - CSS",
        dueDate: "May 20 at 11:59pm",
        points: 32,
        questionCount: 7,
      },
    ],
  },
  reducers: {
    addQuiz: (state, action) => {
      const { status, title, dueDate, points, questionCount } = action.payload;
      state.quizzes.push({
        status,
        title,
        dueDate,
        points,
        questionCount,
      });
    },
    removeQuiz: (state, action) => {
      const { title } = action.payload;
      state.quizzes = state.quizzes.filter((quiz) => quiz.title !== title);
    },
  },
});

export const { addQuiz, removeQuiz } = quizzes.actions;
export default quizzes.reducer;
