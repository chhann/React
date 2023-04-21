import React from 'react'

// URL 파라미터 값 가져오는 함수
// useParams : 파라미터
import { useParams} from 'react-router-dom'

export default function Story2() {
    // URL 파라밈터로 전달된 값을 useParams()를 이용하여 가져올 수있다
    // *주소의 위치에 맞게 전달
    // app.js path='.story/:value'
    // >> 주소로 값을 전달할때 /story/apple 
    const params = useParams();
    const { name } = useParams(); // 객체 
    return (
        <div>
    
            <h1>{params.name}Story2</h1>
            <p>{name}story2 페이지 입니다.</p>
            
        
        
    
        
        </div>
    )
}