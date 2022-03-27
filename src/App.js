import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Utilities/Navbar';
import Footer from './Components/Utilities/Footer';
import Home from './Components/Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;