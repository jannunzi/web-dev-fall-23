import React, {useState} from 'react';
import QuizRow from './QuizRow';

const Quizzes = () => {
  const quizzes = [
    {
      status: 'Closed',
      title: 'Q1 - HTML',
      dueDate: 'May 20 at 11:59pm',
      points: 29,
      questionCount: 11,
    },
    {
        status: 'Closed',
        title: 'Q2 - CSS',
        dueDate: 'May 20 at 11:59pm',
        points: 32,
        questionCount: 7,
      },
    // Add more quiz objects as needed
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTable = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <a name="quizzes"></a>
      <a href="index.html#quizzes">Nav</a>
      <h1>Quizzes</h1>
      <hr />

      <button className="buttonStyle" onClick={toggleTable}>
          {isExpanded ? (
            <>
              <span>&#x25B2;</span> Assignments Quizzes
            </>
          ) : (
            <>
              <span>&#x25BC;</span> Assignments Quizzes
            </>
          )}
        </button>

        {isExpanded && 
        (   <div>
            {quizzes.map((quiz, index) => (
                <table>
                <tr key={index}>
                    <td key={index}>
                <QuizRow
                  key={index}
                  status={quiz.status}
                  title={quiz.title}
                  dueDate={quiz.dueDate}
                  points={quiz.points}
                  questionCount={quiz.questionCount}
                />
                </td>
                </tr>
                </table>
              ))}
              </div>
        )
        }

   

    



    </div>
  );
};

export default Quizzes;