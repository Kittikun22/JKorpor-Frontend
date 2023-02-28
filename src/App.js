import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SubjectAnswer from './pages/Answer';
import WhatIsKorpor from './pages/WhatIsKorpor';
import News from './pages/News';
import NewsPage from './pages/NewsPage';
import Books from './pages/Books';
import Courses from './pages/Courses';
import Faq from './pages/Faq';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:book_type/:book_name/:year/:edition/:subject/:topic" element={<SubjectAnswer />} />
        <Route path='/whatIsKorpor' element={<WhatIsKorpor />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:news_id' element={<NewsPage />} />
        <Route path='/books' element={<Books />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/faq' element={<Faq />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
