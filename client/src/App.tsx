import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { ROUTES, ROUTES_NOT_LOGIN } from './Route';
import { loggedIn, getUsersInfoAsync } from './slices/usersInfoSlice';

function App() {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.usersInfo.value.isLogin);

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
        {Object.values(isLogin ? ROUTES : ROUTES_NOT_LOGIN).map(
          ({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
