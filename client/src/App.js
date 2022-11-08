import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import LoginSignup from "./Pages/LoginSignup.js";
import Profile from "./Pages/Profile";
import Arena from "./Pages/Arena.js";
import TitleNav from "./components/TitleNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TitleNav position="absolute"></TitleNav> */}
        <Router>
          <TitleNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LoginSignup" element={<LoginSignup />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Arena" element={<Arena />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
