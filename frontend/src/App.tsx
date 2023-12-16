import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LikeWord from './pages/LikeWord/LikeWord';
import Quiz from './pages/Quiz/Quiz';
import QuizDetail from './pages/Quiz/page/QuizDetail';
import QuizResult from './pages/Quiz/page/QuizResult';
import Loading from './pages/Quiz/page/Loading';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/like' element={<LikeWord/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/quiz/quiz' element={<QuizDetail />}></Route>
        <Route path='/quiz/result' element={<QuizResult/>}></Route>
        <Route path='/loading' element={<Loading />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
