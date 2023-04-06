import logo from './logo.svg';
import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import MemoComp from './components/MemoComp';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      {/* props을 사용하는 클래스 컴포넌트 */}
      <PropsComp color = "red">
        props값을 받아와서 글자색을 바꿉니다
      </PropsComp>
      {/* state을 사용하는 클래스컴포넌트
        버튼을 클릭할때마다 10씩 증가하는 컴포넌트
      */}
      <CountComp/>
      {/* props, state을 사용하는 클래스컴포넌트
        props의 num값을 가져와서 버튼을 클릭할때마다 num씩 증가
      */}
      <CountPropsComp/>

      {/** 기록장 작성
       * memoList : [
       *      {id:1, memo:"기록", time:new Date()},
       *      {id:2, memo:"연습", time:new Date()}
       *   ]
       * state를 이용하여, memoList의 내용을 map으로
       * li태그에 출력하세요
       * input 태그로 입력, button 클릭 추가, li 클릭 삭제
       */}
      <MemoComp />

      {/* 라이프 사이클 */}
      <LifeCycle/>
    </div>
  );
}

export default App;
