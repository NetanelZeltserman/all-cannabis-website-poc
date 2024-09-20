import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/product-details-page';
import Navbar from './components/navigation/navbar';
import ProductsPage from './pages/products';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
