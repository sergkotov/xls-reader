import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import Page404 from '../../pages/Page404';
import AppHeader from '../appHeader/AppHeader';
import MainPage from '../../pages/MainPage';
import InnPage from '../../pages/InnPage';

import './App.css';

function App() {
  return (
    <Router>
      <AppHeader/>
      <main>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/inn" element={<InnPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;