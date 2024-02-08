import './App.css';
import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';


function App() {
  return (
    < >
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This React Course Is Really Helps Me To Understand React." />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
