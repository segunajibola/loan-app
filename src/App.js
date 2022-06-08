import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar  />
          {/* handleMode={handleMode} darkMode={darkMode} */}
            <Routes >
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/log-in'
                element={<Login />}
              />
            </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
