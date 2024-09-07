import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ContestList from './pages/ContestList';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/despre-noi' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contests' element={<ContestList />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
