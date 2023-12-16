import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import LikeWord from './pages/LikeWord/LikeWord';
import WordDetail from './pages/LikeWord/page/WordDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/like' element={<LikeWord/>}></Route>
        <Route path='/like/:word' element={<WordDetail/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
