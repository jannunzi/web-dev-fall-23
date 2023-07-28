import React from 'react';
import './quizrow.css';

const QuizRow = ({ status, title, dueDate, points, questionCount }) => {
  return (
    <div className="quiz-row">
      <div className="quiz-info">
        <div className="quiz-title">{title}</div>
        <div className="quiz-details">
          <span className="quiz-detail">{status} &nbsp;|</span>
          <span className="quiz-detail"> Due {dueDate} &nbsp;|</span>
          <span className="quiz-detail"> {points} pts &nbsp;|</span>
          <span className="quiz-detail"> {questionCount} Questions</span>
        </div>
      </div>
    </div>
  );
};

export default QuizRow;
