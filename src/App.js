import "./App.css";
import * as Tone from "tone";
import horseimage from "./Images/horse.png";

const synth = new Tone.Synth().toDestination();
const singBaby = () => {
  console.log("clicked singBaby");
  synth.triggerAttackRelease("C4", "8n");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={horseimage} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.. Butthole.
        </p>
        <button onClick={() => singBaby()}>Sing, baby!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
