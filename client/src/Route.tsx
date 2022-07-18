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
import MealsEnroll from './pages/MealsEnroll';
import UserProfile from './pages/UserProfile';

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
  MealsEnroll: {
    path: '/meals/enroll',
    element: <MealsEnroll />,
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
  UserProfile: {
    path: '/mypage/user_profile',
    element: <UserProfile />,
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

// const loginPage = <Navigate replace to="/signin" />;

// export const ROUTES_NOT_LOGIN = {
//   Main: {
//     path: '/',
//     element: <Main />,
//   },
//   Home: {
//     path: '/home',
//     element: loginPage,
//   },
//   Meals: {
//     path: '/meals',
//     element: loginPage,
//   },
//   MealsSearch: {
//     path: '/meals/search',
//     element: loginPage,
//   },
//   MealsEnroll: {
//     path: '/meals/enroll',
//     element: loginPage,
//   },
//   MealsCart: {
//     path: '/meals/cart',
//     element: loginPage,
//   },
//   MealsDetail: {
//     path: '/meals/detail/:name',
//     element: loginPage,
//   },
//   Signin: {
//     path: '/signin',
//     element: <Signin />,
//   },
//   Signup: {
//     path: '/signup',
//     element: <Signup />,
//   },
//   ChartPage: {
//     path: '/chart',
//     element: loginPage,
//   },
//   Mypage: {
//     path: '/mypage',
//     element: loginPage,
//   },
//   UserProfile: {
//     path: '/mypage/user_profile',
//     element: loginPage,
//   },
//   UserInfo: {
//     path: '/mypage/user_info',
//     element: loginPage,
//   },
//   MypageGoalStep_1: {
//     path: '/mypage/goal_step1',
//     element: loginPage,
//   },
//   MypageGoalStep_2: {
//     path: '/mypage/goal_step2',
//     element: loginPage,
//   },
//   MypageGoalStep_3: {
//     path: '/mypage/goal_step3',
//     element: loginPage,
//   },
// };

// const goalStepPage = <Navigate replace to="/mypage/goal_step1" />;

// export const ROUTES_NOT_USER_GOAL = {
//   Main: {
//     path: '/',
//     element: goalStepPage,
//   },
//   Home: {
//     path: '/home',
//     element: goalStepPage,
//   },
//   Meals: {
//     path: '/meals',
//     element: goalStepPage,
//   },
//   MealsSearch: {
//     path: '/meals/search',
//     element: goalStepPage,
//   },
//   MealsEnroll: {
//     path: '/meals/enroll',
//     element: goalStepPage,
//   },
//   MealsCart: {
//     path: '/meals/cart',
//     element: goalStepPage,
//   },
//   MealsDetail: {
//     path: '/meals/detail/:name',
//     element: goalStepPage,
//   },
//   Signin: {
//     path: '/signin',
//     element: goalStepPage,
//   },
//   Signup: {
//     path: '/signup',
//     element: goalStepPage,
//   },
//   ChartPage: {
//     path: '/chart',
//     element: goalStepPage,
//   },
//   Mypage: {
//     path: '/mypage',
//     element: <Mypage />,
//   },
//   UserProfile: {
//     path: '/mypage/user_profile',
//     element: <UserProfile />,
//   },
//   UserInfo: {
//     path: '/mypage/user_info',
//     element: <UserInfo />,
//   },
//   MypageGoalStep_1: {
//     path: '/mypage/goal_step1',
//     element: <GoalUserInfo />,
//   },
//   MypageGoalStep_2: {
//     path: '/mypage/goal_step2',
//     element: <GoalCalories />,
//   },
//   MypageGoalStep_3: {
//     path: '/mypage/goal_step3',
//     element: <GoalNutrient />,
//   },
// };
