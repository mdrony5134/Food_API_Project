import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import FoodCard from './components/FoodCard'

import Home from "./pages/Home";
import FoodDetails from "./pages/FoodDetails";

function App() {
  return (
    <>
      {/* <h1>hello gusy</h1> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodDetails/:id" element={<FoodDetails/>} />
        </Routes>
      </Router>

      {/* <FoodCard/> */}
    </>
  );
}

export default App;
