import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ListIndex from './components/form/ListIndex';
import CounterIndex from './components/counter/CounterIndex';
import { UserInfoContext } from './contexts/context';
import { UserInfoType } from './types/UserInfoType';

/**
 * Appコンポーネント
 * 
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {
  // ユーザー情報(仮)
  const userInfoInitialData: UserInfoType = {
    userId: 123456,
    userName: 'hogehoge',
  };

  return (
    <div>
      {/* ユーザー情報をどのコンポーネントでも利用できるよう、このコンポーネントでProviderに渡す */}
      <UserInfoContext.Provider value={userInfoInitialData}>
        <h1>Context/Reducerのサンプル実装</h1>

        
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/form' element={<ListIndex />} />
            <Route path='/counter' element={<CounterIndex />} />
          </Route>
        </Routes>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
