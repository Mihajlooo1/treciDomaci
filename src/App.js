import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './context';
function App() {
  const [user, setUser] = useState(undefined);
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user
        }}
      >

      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
