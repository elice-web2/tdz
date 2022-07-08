import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/Main';
import Home from './pages/Home';
import MealsDetail from './pages/Meals/MealsDetail';
import MealsCart from './pages/Meals/MealsCart';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import GoalUserInfo from './pages/mygoal/GoalUserInfo';
import GoalCalories from './pages/mygoal/GoalCalories';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/meals/cart" element={<MealsCart />} />
        <Route path="/meals/detail" element={<MealsDetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage/goal_step1" element={<GoalUserInfo />} />
        <Route path="/mypage/goal_step2" element={<GoalCalories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
