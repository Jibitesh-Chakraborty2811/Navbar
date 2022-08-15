import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Page1</Link>
        <Link to="/Page2">Page2</Link>
        <Link to="/Page3">Page3</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/Page2' element={<Page2 />}/>
        <Route path='/Page3' element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;
