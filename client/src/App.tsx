import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/Main';
import Navbar from './pages/Navbar';
import TopNav from './pages/TopNav';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/top" element={<TopNav />} />
        <Route path="/home" element={<Home />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Dummy = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
`;
