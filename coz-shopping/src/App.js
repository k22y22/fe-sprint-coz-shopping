import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import ProductList from './pages/ProductList';
import Bookmark from './pages/Bookmark';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
