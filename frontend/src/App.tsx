import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LikeWord from './pages/LikeWord/LikeWord';
import WordDetail from './pages/LikeWord/page/WordDetail';
import Quiz from './pages/Quiz/Quiz';
import QuizDetail from './pages/Quiz/page/QuizDetail';
import QuizResult from './pages/Quiz/page/QuizResult';
import Loading from './pages/Quiz/page/Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/like' element={<LikeWord/>}></Route>
        <Route path='/like/:word' element={<WordDetail/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/quiz/:id' element={<QuizDetail />}></Route>
        <Route path='/quiz/result' element={<QuizResult/>}></Route>
        <Route path='/loading' element={<Loading />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
