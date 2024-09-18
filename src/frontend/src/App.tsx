import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/navbar';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
