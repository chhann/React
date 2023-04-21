import { useState } from "react";
import './TodoComp.css'
import TodoItem from "./TodoItem";
// todocomp에서 전역으로 사용할 변수
let id = 3;

const TodoComp = () => {

    // TodoComp에서 사용할 데이터
    // inputTodo : input 통해서 가져올 값 - state
    // todoList : todo를 저장할 배열 (추가삭제수정) -state
    // {id : 1, todo: "첫번째 할일" checked: false 
    //  new Date("2023-04-06")                  }

    const [todoList, settodoList] = useState(
        [
            {
                id : 1, 
                todo: "첫번째 할일", 
                checked: false ,
                date: new Date("2023-04-06")
            },
            {
                id : 2, 
                todo: "두번째 할일", 
                checked: true ,
                date: new Date()
            }
        ]
    );

    const [inputTodo, setInputTodo] = useState("");

    // 현재의 버튼 상태를 알려주기위해 useState작성
    // all 일때, 전체 보여줌
    // today 일때, 오늘 날짜로 보여줌
    const [btnState, setBtnState] = useState("all");
    





    // 이벤트 메소드
    const onInputChange = (e) => {
        setInputTodo(e.target.value);
        console.log(inputTodo);
    }
    
    const addTodo = (e) => {
        //form의 submit 이벤트는 새로고침을 실행한다
        e.preventDefault();
        // 배열에 새로운 todo추가 - concat()
        // 새로운 배열을 만들어서 setTodoList로 값 할당
        const newTodoList = todoList.concat(
            {
                id: id,
                todo : inputTodo,
                date : new Date(),
                checked : false
            }
        );
        // id값을 1증가시켜서 숫자값을 겹치지않게 사용
        id ++;
        // state의 값이 바귀면 업데이트
        settodoList(newTodoList);
        setInputTodo("")
    }

    const deleteTodo = (id) =>{
        // todoList에서 선택한 id를 제외한 배열 ( !== )
        // filter() 함수 이용
        const newTodoList = todoList.filter( (t)=> (t.id !== id))
        settodoList(newTodoList)
    }

    //todo checke 수정
    const checkedTodo = (id)=>{
        // map을 이용하여서 요소의 값 수정
        // id값이용해서 동일한 id 값이라면 수정
        const newTodoList = todoList.map(
                // map 에서 함수작성시 if문 사용가능
                (t)=> t.id === id ? 
                {...t, checked: !t.checked} : t)
        settodoList(newTodoList);
    }


    // 오늘날짜의 todo만 들어있는 리스트 
    const todayTodo = todoList.filter((todo)=>{
        // 날짜가 오늘 날짜와 같다면 showTodo에 넣기
        // todo.date로 바로 비교시 객체끼리비교
        // 그 안에 있는 Month와 Date이용하여 비교
        const today = new Date();
        return todo.date.getMonth() === today.getMonth() 
                &&  todo.date.getDate() === today.getDate()
    })

    // 화면에 출력되는 todoList
    const showTodo = btnState === "all" ? todoList : todayTodo

    // 데이터 값을 확인하기 위해 화면의 HTML 구성
    // 데이터 값만 확인 - HTML 뼈대
    // 레이아웃 구성 확인 - css 함께
    return (
        <div>

            <h1>Todo-List</h1>
            {/* submeit을 통해서 이벤트 실행 : 엔터눌렀을때 실행 */}
            
            <form
                onSubmit={addTodo}
            >
                <input type="text" 
                onChange={ onInputChange }
                value={inputTodo}
                
                />
                <input type="submit" value="+" />
            </form>
            <hr />
                
            <button
                onClick={()=>{setBtnState("all")}}
                className={btnState==="all" ? "on": ""}
            >
                모든할일
            </button>

            <button
                onClick={()=>{setBtnState("today")}}
                className={btnState==="today" ?"on":""}

            >
                오늘할일
            </button>
            <ul>
                {
                    // 배열을 사용할때 map을 사용해서 출력
                    showTodo.map( (todo)=>(
                    <TodoItem 
                        key ={todo.id}
                        todo={todo}
                        checked={checkedTodo}
                        deleteTodo={deleteTodo}
                    />
                    ) )
                }
            </ul>

        </div>
    )
}

export default TodoComp;