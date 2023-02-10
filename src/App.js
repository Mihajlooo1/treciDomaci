import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './context';
import CreditRequestsPage from './pages/CreditRequestsPage';
import axios from "axios";
import ClientsPage from './pages/ClientsPage';
import CreditsPage from './pages/CreditsPage';

axios.defaults.baseURL = 'http://localhost:8000/api'
function App() {
  const [user, setUser] = useState(undefined);
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user,
          setUser
        }}
      >
        <Routes>
          <Route path='/' element={<CreditRequestsPage />} />
          <Route path='/clients' element={<ClientsPage />} />
          <Route path='/credits' element={<CreditsPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
