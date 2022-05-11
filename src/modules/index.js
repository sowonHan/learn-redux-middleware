// 루트 리듀서. 기존에 만들어둔 리듀서들을 하나로 합쳐주는 역할. (그래야 컴포넌트 여기저기서 리듀서를 가져다쓰기 편리하니까)
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
