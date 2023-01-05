
import './App.css';



//components

import Navbar from './components/Navbar';
import CodeforInterview from './components/CodeforInterview';
import Allusers from './components/Allusers';
import AddUser from './components/AddUser';

import {BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<CodeforInterview/>}/>
      <Route path='/all' element={<Allusers/>}/>
       <Route path='/add' element={<AddUser/>}/> 
       </Routes>
    </BrowserRouter>
  );
}

export default App;
