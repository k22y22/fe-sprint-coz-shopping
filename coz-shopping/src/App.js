import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import ProductList from './pages/ProductList';
import BookmarkPage from './pages/BookmarkPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/BookmarkPage" element={<BookmarkPage />} />
        </Routes>      
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
