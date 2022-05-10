/* 미들웨어는 커링함수. 아래 코드와 같은 의미
action은 dispatch
next는 store.dispatch와 비슷한 역할이지만 차이가 있다
  차이점 : 미들웨어가 여러 개일 때 다음 미들웨어에게 액션을 넘겨준다 (그래서 미들웨어가 하나밖에 없으면 next가 실행될 때 디스패치와 똑같이 리듀서에게 넘겨줌) */
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type);
  console.log("이전 상태", store.getState());
  console.log("액션", action);

  next(action); // 다음 미들웨어 혹은 리듀서에게 전달

  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd();
};

// const loggerMiddleware = function loggerMiddleware(store) {
//   return function (next) {
//     return function (action) {};
//   };
// };

export default loggerMiddleware;
