import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalendarStamp from './pages/CalendarStamp';
import { ROUTES } from './Route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(ROUTES).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path={'/calendar'} element={<CalendarStamp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
