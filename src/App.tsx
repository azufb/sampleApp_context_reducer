import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Form from './components/form/Form';
import CounterIndex from './components/counter/CounterIndex';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/counter' element={<CounterIndex />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
