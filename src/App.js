import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;