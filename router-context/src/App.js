import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import BoardList from './page/BoardList';
import Layout from './page/Layout';
import Board from './page/Board';
import { DataProvider } from './context/DataContext';
import BoardWriteForm from './page/BoardWriteForm';
import BoardModifyForm from './page/BoardModifyForm';
import LoginForm from './page/LoginForm';
import ImagePage from './page/ImagePage';

function App() {
  return (
    <div className="App">

      <DataProvider>
      <Routes>

        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/boardList' element={<BoardList/>}/>
          <Route path='/boardList/:id' element={<Board/>}/>
          <Route path='/boardWriteform' element={<BoardWriteForm/>}/>
          <Route path='/board-modify-form' element={<BoardModifyForm/>}/>
          
          <Route path='/loginform' element={<LoginForm/>}/>
        </Route>

        <Route path='/image' element={<ImagePage/>}/>
      </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
