import "./App.css";
import ReadingPanel from "./components/ReadingPanel/ReadingPanel";

function App() {
  return (
    <>
      <h1>React reading panel</h1>
      <ReadingPanel targetClass="test"></ReadingPanel>
      <div className="test">This is a sample test</div>
    </>
  );
}

export default App;
