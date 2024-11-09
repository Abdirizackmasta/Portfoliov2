import Laziness from "./components/blogs/laziness/Laziness";
import BlogsIntro from "./components/blogsHeader/BlogsIntro";
import BlogsPage from "./pages/BlogsPage";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blogs" element={<BlogsPage />}>
            <Route index element={<BlogsIntro />} />
            <Route path="laziness" element={<Laziness />} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
