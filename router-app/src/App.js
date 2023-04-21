import './App.css';
import {Routes, Route} from 'react-router-dom';
// 각각의 페이지 (하나에 주소에 보일 컴포넌트)
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';
import Story2 from './page/Story2';
import Erro from './page/Erro';
import Articles from './page/Articles';
import Article from './page/Article';
import Story2List from './page/Story2List';
import HeaderLink from './components/HeaderLink';
import Layout from './page/Layout';
import NavigatePage from './page/NavigatePage';
import NaviStatePage from './page/NaviStatePage';

function App() {
  return (
    // Routes를 이용하여 컴포넌트와 주소를 연결하는 Router를 정리
    // div안에 Routes를 넣어서 사용해도 상관없다
    <div>
      {/* Routes안에 들어가지 않는 컴포넌트를 사용해서 화면에 계속 띄워줄 수 있다 */}
    <HeaderLink/>

    <Routes>
      <Route path='/' element={<Layout/>}>
      {/* app.js 안에서 Route이용해서 주소와 컴포넌트 연결 </span>
        path : 주소 '/' : 첫화면에 보이는 주소
        element : 컴포넌트 {}를 통해서 전달
      */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      {/* <Story/> 컴포넌트 만들어서, '/Stroy' 주소로 연결 
        확인은 주소창에 http://localhost:3000/stroy 로 확인
      */}
      {/* URL 파라미터를 이용한 값전달 
        path의 주소에 값이 들어갈 공간에 이름 작성
        값은 브라우저에 주소창에 입력했을때 값이 들어감
      */}
      <Route path='/story/:value' element={<Story/>} />
      {/* <Story/> 를 복사하여 <story2/> 로 수정하여 사용
        URL 파라미터 이름을 name 로 작성
        URL 파라미터로 전달할 값은 green 으로 작성해서 
        >>주소를 /story2/green
        useParams 이용해서 화면서 출력
      */}
      {/* page 폴더에 Stroy2List.jsx를 만들고
        fuite 배열을 들고와서 Link 작성
        Link 를 클릭했을때 Story2가 보일 수 있게 작성하세요
        주소창에 '/story2' 를 입력해서 들어가기
      */}
      <Route path='/story2' element={<Story2List/>}>
      <Route path='/story2/:name' element={<Story2/>} />
      </Route>

      {/* 관련된 페이지는 주소로 분류해서 사용가능 */}
      <Route path='/articles' element={<Articles/>}>
        {/* 중첩 라우터 - Outlet과 함께 사용 */}
      <Route path='/articles/:id' element={<Article/>}/>
      </Route>

      {/* navigate를 이용한 값 전달 
        NavigatePage.jsx > 버튼을 클릭하면, 이동하면서 값 전달
        NaviStatePage.jsx > 전달받은 값 출력
      */}
      <Route path='/navigate' element={<NavigatePage/>}/>
      <Route path='/navigate/state' element={<NaviStatePage/>}/>



      {/* path에 *을 넣으면 지정된 주소 외에는 전부
        * element로 연결된 컴포넌트가 출력된다
        * 위의 작성한 주소와 헷갈리지않게 알에 두는 편
      */}
      <Route path='*' element={<Erro/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
