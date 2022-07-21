// dependencies
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// stores
import { useAppDispatch } from 'hooks';
import { getUsersInfoAsync, loggedIn } from 'slices/usersInfoSlice';

// etc
import { ROUTES } from 'Route';

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
