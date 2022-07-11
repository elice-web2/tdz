import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CalendarStamp from './pages/CalendarStamp';
import { ROUTES } from './Route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(ROUTES).map(([_, route]) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path={'/calendar'} element={<CalendarStamp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
