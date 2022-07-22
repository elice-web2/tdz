import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mealsSlice from 'slices/mealsSlice';
import usersInfoReducer from 'slices/usersInfoSlice';
import dateReducer from 'slices/dateSlice';

export const store = configureStore({
  reducer: {
    meal: mealsSlice,
    usersInfo: usersInfoReducer,
    date: dateReducer,
  },
});

// store의 dispatch 타입
// middleware를 거칠 수 있도록 하기위해 useDispatch에 타입설정
export type AppDispatch = typeof store.dispatch;

// useSelector의 state 타입
export type RootState = ReturnType<typeof store.getState>;

// 비동기 thunk Action 함수를 바로 생성하고 싶을 때의 타입
// const incrementIfOdd =
// (amount: number): AppThunk =>
// (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
