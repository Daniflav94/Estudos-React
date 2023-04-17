import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Lista from './pages/lista/Lista'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lista' element={<Lista />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
