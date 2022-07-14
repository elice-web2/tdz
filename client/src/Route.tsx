import ChartPage from './pages/ChartPage';
import Home from './pages/Home';
import Main from './pages/Main';
import MealsCart from './pages/MealsCart';
import MealsDetail from './pages/MealsDetail';
import MealsList from './pages/MealsList';
import MealsSearch from './pages/MealsSearch';
import GoalCalories from './pages/Mygoal/GoalCalories';
import GoalNutrient from './pages/Mygoal/GoalNutrient';
import GoalUserInfo from './pages/Mygoal/GoalUserInfo';
import Mypage from './pages/Mypage';
import UserInfo from './pages/UserInfo';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Navigate } from 'react-router-dom';

export const ROUTES = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Home: {
    path: '/home',
    element: <Home />,
  },
  Meals: {
    path: '/meals',
    element: <MealsList />,
  },
  MealsSearch: {
    path: '/meals/search',
    element: <MealsSearch />,
  },
  MealsCart: {
    path: '/meals/cart',
    element: <MealsCart />,
  },
  MealsDetail: {
    path: '/meals/detail',
    element: <MealsDetail />,
  },
  Signin: {
    path: '/signin',
    element: <Signin />,
  },
  Signup: {
    path: '/signup',
    element: <Signup />,
  },
  ChartPage: {
    path: '/chart',
    element: <ChartPage />,
  },
  Mypage: {
    path: '/mypage',
    element: <Mypage />,
  },
  UserInfo: {
    path: '/mypage/user_info',
    element: <UserInfo />,
  },
  MypageGoalStep_1: {
    path: '/mypage/goal_step1',
    element: <GoalUserInfo />,
  },
  MypageGoalStep_2: {
    path: '/mypage/goal_step2',
    element: <GoalCalories />,
  },
  MypageGoalStep_3: {
    path: '/mypage/goal_step3',
    element: <GoalNutrient />,
  },
};

const aaa = <Navigate replace to="/signin" />;

export const ROUTES_NOT_LOGIN = {
  Main: {
    path: '/',
    element: aaa,
  },
  Home: {
    path: '/home',
    element: aaa,
  },
  Meals: {
    path: '/meals',
    element: aaa,
  },
  MealsSearch: {
    path: '/meals/search',
    element: aaa,
  },
  MealsCart: {
    path: '/meals/cart',
    element: aaa,
  },
  MealsDetail: {
    path: '/meals/detail',
    element: aaa,
  },
  Signin: {
    path: '/signin',
    element: <Signin />,
  },
  Signup: {
    path: '/signup',
    element: <Signup />,
  },
  ChartPage: {
    path: '/chart',
    element: aaa,
  },
  Mypage: {
    path: '/mypage',
    element: aaa,
  },
  UserInfo: {
    path: '/mypage/user_info',
    element: aaa,
  },
  MypageGoalStep_1: {
    path: '/mypage/goal_step1',
    element: aaa,
  },
  MypageGoalStep_2: {
    path: '/mypage/goal_step2',
    element: aaa,
  },
  MypageGoalStep_3: {
    path: '/mypage/goal_step3',
    element: aaa,
  },
};
