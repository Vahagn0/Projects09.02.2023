import './App.css';
import SignUp from './SignUp';
import LogIn from './logIn';
import {Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<SignUp />} /> 
          <Route path='/logIn' element={<LogIn />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
