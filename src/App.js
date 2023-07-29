import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas";
import Lab1 from "./labs/a1";
import Grades from "./canvas/grades";
import Nav from "./nav";
import Piazza from "./canvas/piazza";
import Quizzes from "./canvas/quizzes";
import QuizEditor from "./canvas/quiz-editor";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
<BrowserRouter>
     <Routes>
         <Route path='/' element={<Canvas />}>
         
             <Route path='/started'  />
             <Route path='/calendar'  />
             <Route path='/user'  />
             <Route path='/order'  />
         </Route>
     </Routes>
 </BrowserRouter>
  {/* Your main content goes here */}
</div>
</div>
  );
}

export default App;
