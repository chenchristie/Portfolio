import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageContainer } from './components/pageComponents/PageContainer';
import { Header1 } from './components/styled';
import ContextProvider from './components/ContextProvider';
import { colors } from './general/Constants';
import { HeaderComponent } from './components/Text/HeaderComponent';
import { About } from './pages/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Work } from './pages/Work';
import { Details } from './pages/Details';
import { CheckBackIn } from './components/NoData';

function App() {
  return (
    <div className="App">
      <header className="Christie Chen Portfolio"> </header>
      <ContextProvider.Provider value>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<CheckBackIn />} />
            {/* <Route path="/Portfolio" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Details" element={<Details />} /> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider.Provider>
    </div>
  );
}

export default App;
