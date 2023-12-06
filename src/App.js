import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Page/Home/Home';
import CardYList from './components/Page/CardY/CardY';
import CardYDetails from './components/Page/CardY/CardYDetails';
import CardP from './components/Page/CardP/CardP';
import CardPDetail from './components/Page/CardP/CardPDetails';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/cardy' element={<CardYList />} />
        <Route path='/cardy/:id' element={<CardYDetails />} />
        <Route path='/cardp' element={<CardP/>} />
        <Route path="/card-detail/:index" element={<CardPDetail/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
