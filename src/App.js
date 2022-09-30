import {Route, Routes} from "react-router-dom"

import Welcome from "./Components/Welcome";
import Questions from "./Components/Questions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/quiz" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
