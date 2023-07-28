import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas";
import Lab1 from "./labs/a1";
import Grades from "./canvas/grades";
import Nav from "./nav";
import Piazza from "./canvas/piazza";
import Quizzes from "./canvas/quizzes";
import QuizEditor from "./canvas/quiz-editor";

function App() {
  return (
    <div>
      <Nav />
      <h1>Web Dev</h1>
      <Lab1 />
      <Canvas />
      <Grades />
      <Quizzes/>
      <QuizEditor/>
      <Piazza />
    </div>
  );
}

export default App;
