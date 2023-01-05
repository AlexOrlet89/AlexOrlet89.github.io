import "./App.css";
import * as Tone from "tone";
import horseimage from "./Images/horse.png";
import TableOfContents from "./Components/TableOfContents/TableOfContents";

const synth = new Tone.Synth().toDestination();
const singBaby = () => {
  console.log("clicked singBaby");
  synth.triggerAttackRelease("C4", "8n");
};

function App() {
  return (
    <div className="App">
      <TableOfContents />
      <img src={horseimage} className="App-logo" alt="logo" />

      <button onClick={() => singBaby()}>Sing, baby!</button>
    </div>
  );
}

export default App;
