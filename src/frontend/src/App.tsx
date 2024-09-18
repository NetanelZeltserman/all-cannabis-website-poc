import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-center items-center'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
