import React, { useState } from "react"
import './todolistcss.css'
import './button.css'

let today = new Date()

let globalId = 2; 

const TodoList = (props) => {

    const[memo, setMemo] = useState(
    [
        {
        id : 1 ,
        date : new Date("2023-04-05"),
        text : "할일 입니다",
        checked: false
        }
    ]
)

    const inputChange = (e)=>{setInputMemo(e.target.value)}
    
    const [inputMemo, setInputMemo] = useState("")

    const printClock = (date) => {
        const month = date.getMonth()+1
        const day = date.getDate()
        // const hours = date.getHours();
        // const minutes = date.getMinutes();
        // const second = date.getSeconds();
        return `${month}월${day}일`
    }

    const addMemo = () => {
        const newMemos = memo.concat(
            {
                id : globalId,
                date : new Date(),
                text : inputMemo
            }
        );
        globalId++;
        setMemo(newMemos);
        setInputMemo("");
    }

    const deleteMemo = (id)=>{
        
        const newMemos = memo.filter(
            (s)=>s.id !== id
        )
        setMemo(newMemos);
    }

    

    const [buttons, setbutton] = useState("All") 
    
    const showMemo = buttons=="All" ? memo : memo.filter(
        (s)=>printClock(s.date) == "4월6일"
    )
    


    return(
        <div className="bckimg">
            <h1 className="title">Todo-list</h1>

            <input 
            type="text"
            onChange={inputChange}
            value={inputMemo}
            className="inputbtn"
            />
            <button
                onClick={addMemo}
                className={"plusbtn"}
            >
                +
            </button>

            <hr />  

            <div className="under">
            <button
                className={"button-56"}
                onClick={()=>{setbutton("All")}}
                >
            모든 할일
            </button>
            　　
            <button
                className={"button-56"}
                onClick={()=>{setbutton("today")}}
                >
            오늘 할일
            </button>

            <ul className="ul">
                {
                showMemo.map((memos)=>

                <li 
                    key={memos.id}
                    className={memos.checked ? "on" : ""}
                >

                <p>{printClock(memos.date)}</p>
                    
                    <input type="checkbox" 
                        checked={memos.checked}
                        className={"ck"}
                        readOnly
                        onClick={()=>{
                            
                            const newMemos = memo.map((s)=>{
                                
                                if(memos.id !== s.id) {
                                    return s;
                                } else {
                                    return {...s, checked: !s.checked }
                                }
                            })
                            setMemo(newMemos);

                        }}
                    />

                    <span className="todo">{memos.text}</span>
                    
                    <button
                        className={"xbtn"}
                        onClick={()=>{deleteMemo(memos.id)}}
                    >
                        x
                    </button>
                </li>
                
                
                )
                }
            </ul>
            </div>



        </div>
    )
}

export default TodoList;