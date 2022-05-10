import React from "react";

// 프레젠테이션 컴포넌트 중에서도 제일 껍데기
function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}> +1 </button>
        <button onClick={onDecrease}> -1 </button>
      </div>
    </div>
  );
}

export default Counter;
