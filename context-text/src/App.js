import './App.css';
import Toolbar from './components/Toolbar';
import ContexBox from './components/ContexBox';

// App에서 쓰기위해 , 작성한 ThemeContext 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
import DataBox from './components/DataBox';
import Dataprint from './components/Dataprint';

// ObjectContext.Provider의 value값을 따로 변수에 저장해서 사용
// >> 변수의 값이 많다면 확인하기 힘들다
// >> Context를 만들때, value값도  함께 작성해서 만들자 !
const initvalue ={ name:"하모하모", login:true } 

function App() {
  return (
    <div className="App">
      {/* 작성한 context를 값을 사용할 컴포넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='light'>
        <ObjectContext.Provider value= {initvalue}>
          <Toolbar/>
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      {/* ContextBox를 가져와서 ThemeContext를 이용하여
        blue 값을 전달하기
      */}

      <ThemeContext.Provider value='red'>
        <ContexBox/>
      </ThemeContext.Provider>

      {/* DataContext를 이용해서 value값을 전달한
          DataProvider 사용*/}
      <DataProvider>
        <DataBox/>
        {/* <Dataprint /> 를 작성하여 화면에 출력 */}
        <Dataprint/>
      </DataProvider>


    </div>
  );
}

export default App;
