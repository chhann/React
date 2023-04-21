import React, { useEffect, useState } from 'react'

export default function EffectHook2() {
    // useEffect를 사용해서 useState의 비동기 값을
    // 다른 useState에 담아오는 방법 확인
    const [ name, setName ] = useState("홍길동");
    const [ age, setAge ] = useState(29);
    const [ profile, setProfile ] = useState({ 
        name : "홍길동", age : 29
    });


    // 공공데이터를 담을 공간(state)
    const [ menuList, setMenuList ] = useState([]);
    // 공공데이터요청후 그 값이 들어왔을때 
    const [ loding, setLoding ] = useState(false);


    // name값이 수정되었을 때, 다른 값도 함께 수정
    // 1. setName 먼저 실행
    // 2. useEffect(()=>{},[name])의 함수가 실행
    useEffect(()=>{
        setProfile({...profile, name});
    },[name])

    // age이 바뀌었을때 profile의 age값 수정하는 useEffect
    // *보통은 버튼을 눌렀을때 그 값이 들어감
    // *지금은 연습을 위해 함께 바꾸고 있다
    useEffect(()=>{
        setProfile({...profile, age});
    },[age])

    // 컴포넌트가 생성이 되었을때 공공데이터 가져옴
    // await를 사용할때 async를 이용하여 비동기 함수로 작성
    const getMenu = async ()=>{
        const promise = await fetch ("https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=rosPjDGtOOyXFW7fBv40NTrxfsrDCHs9BJNYlAkIYaNSVhUkWXInJUNI7Sa142j2")
        const response = await promise.json();
        console.log(response); 
        setMenuList(response.body);
    }

    // useEffect의 함수 자체에는 async를 붙일 수 없음
    // 값을 가져오는 비동기 함수를 따로 작성한 후 호출하여 사용
    useEffect ( ()=>{
        // 컴포넌트를 생성할때 바로 호출해서 사용
        getMenu();
        // getMenu()는 비동기 : getMenu의 내용이 다 실행되지않음
        // 아래 작성한 코드는 바로 실행
    },[]);

    useEffect(()=>{
        // menuList의 처음 값이 빈값으로 들어감
        // 빈값이 아닌 값이 들어갔을때 화면에 출력
        console.log(menuList)
        if(menuList.length>0){
        // 값이 들어왔다면 true로 바꿔서 화면출력
        setLoding(true);
        }
    },[menuList])

    return (
    <div>
        <p>useState의 값은 비동기로 저장(실행순서대로 저장되지않음)</p>
        <label htmlFor="">이름</label>
        <input type="text" 
            onChange={(e)=>{
                // name의 값을 바꿔줌
                setName(e.target.value)
                // name안에 들거아 있는 값을 profile에 전달
                // setProfile({...profile, name : name}) 동일
                // `name` = `값` 즉 `변수`와 `값`이 객체의 속성과 값으로 들어감
                // setProfile({...profile, name})
                // 같은 이벤트에서 set을 이용하여 수정한 state값을 가져올려고 하면
                // 이전 값을 가져온다 (현재 바로 수정한 값 접근 x)
                // > useEffect의 두번째 값[]에 name값을 넣어서 값이 바뀌었을때
                // setPropfile이 실행되게 수정
                setAge(e.target.value)
            }}/>
        <label htmlFor="">나이</label>
        <input type="number" 
            onChange={(e)=>{
                setAge(parseInt(e.target.value))}}
        />

        <h4>
            name : {name} 
            age : {age}, 
            profile의 name : {profile.name}
            profile의 age : {profile.age}
        </h4>

        <hr />
        {/* 공공데이터로 값을 가져올떄, 그 값이 바로 들어오지않는다 
            바로 화면에 출력하면 오류발생
        */}
        <p>공공데이터로 가져온 값 : {loding && menuList[0].MENU_NM}</p>

    </div>
    )
}
