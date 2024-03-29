import {
    HashRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App () {
return (
    <Router>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
)}

export default App;