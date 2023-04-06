import { element } from 'prop-types';
// 원하는 컴포넌트를 들고와서 사용가능
import EventComp from './EventComp';
import React, {Component} from 'react'

export class RefDomEvent extends Component {
    constructor (pros){
        super(pros);
        // 1. input태그가 들어갈 공간 (변수)
        this.textInput = null;
        // 2. ref 콜백함수를 통해 DOM에 접근
        // 1) ref에 들어갈 함수 작성(화살표함수)
        this.setTextInputRef = (element)=> {
            // 2) element를 통해서 ref를 통해 dom 가져옴
            // 3) 저장해서 쓰기위해 만든 공간에 할당
            this.textInput = element;
        }

        // 16.3버전 이후 사용 가능
        this.myRef = React.createRef();


        //////실습 //////
        this.inputBackgruond = null;
        this.setInputBackground = (element)=> {
            this.inputBackgruond = element;
        }
        // createRef작성
        this.yourRef = React.createRef();
        //////실습끝 //////



        /** 직접작성한 컴포넌트도 ref를 통해 들고올 수 있다 */
        this.myComp = React.createRef();
    }



    // this.textInput접근하는 메소드
    textInputEvent = ()=>{
        if(this.textInput) {
            // ref를 톻애서 DOM을 가져와서 그 안에있는 내용에
            // JS에서 id통해 가져온 것 처럼 접근할 수 있다
            this.textInput.focus();
        }
    }
    // myRef 확인
    myRefEvent = ()=>{
        if(this.myRef) {
                this.myRef.current.focus();
        }
    }

    //////실습 //////
    yourRefEvent = ()=>{
        if(this.yourRef){
            this.yourRef.current.style.backgroundColor = "red"
        }
        
    }
    /**컴포넌트 들고오기 */


    
    render() {

        return (
        <div>
            
            <h1>Ref를 통해 input 가져오기</h1>
            <input 
                type="text" 
                // 3. ref속성을 이용해서 setTextInputRef를 호출
                ref={this.setTextInputRef}
            />
            {/* input 태그가 들고와졌는지 확인 */}
            <button onClick={()=>{console.log(this.textInput)}}>
                console에 textInput출력
            </button>

            <button onClick={this.textInputEvent}>
                버튼을 누르면 input 포커스 
            </button>
            


            <input 
                type="text" 
                ref = {this.myRef}
            />
            <button
                onClick={()=>{console.log(this.myRef.current)}}
            >
                myRef의 값 확인
            </button>

            <button
                onClick={this.myRefEvent}
            >
                myRef에 포커스
            </button>


            {/* ref 연습 */}

            <input 
                type="text" 
                ref={this.setInputBackground}
            />
            <button
                onClick={()=>{this.inputBackgruond.style.backgroundColor = "red";}}
            >
                색을 바꾼다
            </button>



            <input 
                type="text" 
                ref = {this.yourRef}
            />
            <button
                onClick={this.yourRefEvent}
            >
                색을 바꿉니다
            </button>


            <hr />
            <h3>컴포넌트를 불러와서 ref를 통해가져올 수 있다</h3>
            <EventComp ref={this.myComp}/>
            <button
                // 컴포넌트를 ref 로 들고오게 되면 그 컴포넌트에있는
                // 메소드, state, props에 다 접근할 수 있다.
                // state와 props의 경우 값을 가져올 수 있고
                // 메소드의 경우 실행할 수 있다
                // >> 부모에서 작식 컴포넌트의 값을 가져오거나,
                // 메소드를 실행하고 싶을때 사용 가능
                onClick={()=>{console.dir(this.myComp.current);}}
            >
                ref로 들고온 myComp확인
            </button>

            <hr />
            <h3>
                리액트에서 이벤트를 사용할때
                화살표함수에 넣어서 사용하는 이유
            </h3>
            <p>
                자바스크립트에서 addEventListenenr를 사용할때와 동일한 이유
            </p>
            <p>
                addEventListener를 사용할때 함수를 넣을때
                함수 이름을 넣어서 실행 <br />
                그래서 함수이름() 실행한 결과를 넣어주면,
                이벤트가 실행할때마다 되는것이 아니라, 화면이 렌더할때 실행
            </p>

            
        </div>
        )
    }
}


export default RefDomEvent