import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

/* 리덕스의 기본 3가지 */

// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// redux-saga
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
// 클릭했을 때 payload에 들어가지 않도록 undefined로 처리
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(increase()); // 디스패치 해줌
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // takeEvery : 들어오는 모든 액션에 대해 특정 작업을 처리해준다
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // takeLatest : 기존에 진행 중인 작업이 있으면 모두 취소하고 가장 마지막에 들어오는 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// redux-thunk
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

// 초기 상태와 리듀서
const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
