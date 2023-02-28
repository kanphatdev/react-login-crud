import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserTable from './component/UserTable';
import Login from './component/LOGIN';
import UserTableCreate from './component/UserTableCreate';
import Sign from './component/sign';
import UserCreate from './component/UserCreate';
import UserUpdate from './component/UserUpdate';
import './Form.css';
function App() {
  return (
    <div>

      <div>
        <Routes>
          <Route path='/' element={<UserTable></UserTable>} />
          <Route path='/usertablecreate' element={<UserTableCreate></UserTableCreate>} />
          <Route path='/Login' element={<Login ></Login>} />
           <Route path='/adddata' element={<UserCreate></UserCreate>} /> 
          <Route path='/signup' element={<Sign></Sign>} />
           <Route path='/Editdata/:id' element={<UserUpdate></UserUpdate>} />
         
       
        </Routes>

      </div>

    </div>
  );
}

export default App;
