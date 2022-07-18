import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { ROUTES } from './Route';
import { loggedIn, getUsersInfoAsync } from './slices/usersInfoSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('login')) {
      dispatch(loggedIn());
    }
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      if (localStorage.getItem('login')) {
        dispatch(loggedIn());
        await dispatch(getUsersInfoAsync());
      }
    };
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {Object.values(ROUTES).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
