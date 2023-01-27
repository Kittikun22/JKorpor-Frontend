import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SubjectAnswer from './pages/SubjectAnswer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:book_type/:book_name/:year/:edition/:subject/:topic" element={<SubjectAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
