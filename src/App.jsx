import BlogsPage from "./pages/BlogsPage";
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/blogs" element={<BlogsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
