import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home/Home';
import About from  './pages/about/About'
import Navbar from  './components/navbar/Navbar'
import Product from './pages/product/Product';
import Info from './pages/info/Info';
import NotFound from './pages/notFound/NotFound';
import SearchForm from './components/SearchForm/SearchForm';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <SearchForm />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />          
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="*" element={<NotFound />} /> 
          <Route path='/search' element={<Search />} />
          <Route path='/company' element={<Navigate to="/about" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
