import "./App.css";
import Cards from "./cards/Cards";
import Header from "./header/Header";

function App() {
  return (
    <div className="app">
      {/* header here  */}
      <Header />
      {/* tinder cards here  */}
      <Cards />
      {/* bottom icons here  */}
    </div>
  );
}

export default App;
