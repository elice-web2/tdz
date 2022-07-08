import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Home';
import MealsSearch from './pages/Meals/MealsSearch';
import MealsDetail from './pages/Meals/MealsDetail';
import MealsCart from './pages/Meals/MealsCart';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ChartPage from './pages/ChartPage';
import Mypage from './pages/Mypage/Mypage';
import UserInfo from './pages/Mypage/UserInfo';
import GoalUserInfo from './pages/mygoal/GoalUserInfo';
import GoalCalories from './pages/mygoal/GoalCalories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meals/search" element={<MealsSearch />} />
        <Route path="/meals/cart" element={<MealsCart />} />
        <Route path="/meals/detail" element={<MealsDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/user_info" element={<UserInfo />} />
        <Route path="/mypage/goal_step1" element={<GoalUserInfo />} />
        <Route path="/mypage/goal_step2" element={<GoalCalories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
