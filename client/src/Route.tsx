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
    path: '/meals/detail/:name',
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

const loginPage = <Navigate replace to="/signin" />;

export const ROUTES_NOT_LOGIN = {
  Main: {
    path: '/',
    element: <Main />,
  },
  Home: {
    path: '/home',
    element: loginPage,
  },
  Meals: {
    path: '/meals',
    element: loginPage,
  },
  MealsSearch: {
    path: '/meals/search',
    element: loginPage,
  },
  MealsCart: {
    path: '/meals/cart',
    element: loginPage,
  },
  MealsDetail: {
    path: '/meals/detail/:name',
    element: loginPage,
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
    element: loginPage,
  },
  Mypage: {
    path: '/mypage',
    element: loginPage,
  },
  UserInfo: {
    path: '/mypage/user_info',
    element: loginPage,
  },
  MypageGoalStep_1: {
    path: '/mypage/goal_step1',
    element: loginPage,
  },
  MypageGoalStep_2: {
    path: '/mypage/goal_step2',
    element: loginPage,
  },
  MypageGoalStep_3: {
    path: '/mypage/goal_step3',
    element: loginPage,
  },
};
