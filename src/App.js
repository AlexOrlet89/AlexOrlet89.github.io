import "./App.css";
import skateboardingHorse from "./Images/skateboarding_horse_by_micole55_df97eiv-pre.jpg";
import TableOfContents from "./Components/TableOfContents/TableOfContents";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <h1 id="logoImage" className="Header">
        <a href="/">
          <img src={skateboardingHorse} alt="Skateboarding Horse" />
        </a>
      </h1>
      {/* <TableOfContents /> */}
      <Home />
    </div>
  );
}

export default App;
