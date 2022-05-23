import LoadTest from "./LoadTest";
import ScalabilityTest from "./ScalabilityTest";
import FlexibleTest from "./FlexibleTest";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Load test</Link>
            </li>
            <li>
              <Link to="/flexible">Flexible test</Link>
            </li>
            <li>
              <Link to="/scalability">Scalability test</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LoadTest />} />
          <Route path="flexible" element={<FlexibleTest />} />
          <Route path="scalability" element={<ScalabilityTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
