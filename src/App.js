import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas";
import Lab1 from "./labs/a1";
import Grades from "./canvas/grades";
import Nav from "./nav";

function App() {
  return (
    <div>
      <Nav />
      <h1>Web Dev</h1>
      <Lab1 />
      <Canvas />
      <Grades />
    </div>
  );
}

export default App;
