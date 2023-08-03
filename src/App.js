import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas";
import Lab1 from "./labs/a1";
import Grades from "./canvas/grades";
import Nav from "./nav";
import Piazza from "./canvas/piazza";
import Quizzes from "./canvas/quizzes";
import QuizEditor from "./canvas/quiz-editor";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Sidebar from "./canvas/sidebar/Sidebar";

function App() {
  return (
    // <div>
    //   <Nav />
    //   <h1>Web Dev</h1>
    //   <Lab1 />
    //   <Canvas />
    //   <Grades />
    //   <Quizzes/>
    //   <QuizEditor/>
    //   <Piazza />
    // </div>
    //     <BrowserRouter>
    //     <Routes>
    //         <Route path='/' element={<AppLayout />}>

    //             <Route path='/started'  />
    //             <Route path='/calendar'  />
    //             <Route path='/user'  />
    //             <Route path='/order'  />
    //         </Route>
    //     </Routes>
    // </BrowserRouter>

    <div className="app">
      <Sidebar />
      <div className="content">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Canvas />}></Route>
            <Route path="/started" />
            <Route path="/calendar" />
            <Route path="/user" />
            <Route path="/order" />
            <Route path="grades" element={<Grades />} />
            <Route path="piazza" element={<Piazza />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="quiz-editor" element={<QuizEditor />} />
          </Routes>
        </HashRouter>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default App;
