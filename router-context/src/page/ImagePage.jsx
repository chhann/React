import React from 'react'
import logo from '../logo.svg'

export default function imagePage() {
    return (
        <div>
            <h3>imagePage</h3>
            <div>
                <img src="/logo192.png" alt="" />
                <img src="/img/logo192.png" alt="" />
                <p>public에서 가져오는 방법</p>    
                <p>bulid 할때 그 내용을 함께 가져감</p>
            </div>
            <hr /> 
            <div>
                <img src={logo} alt="" />
                <p>src 폴더에서 가져올때 import를 통해서 값을 가져올 수 있다</p>
                <img src={require('../logo.svg').default} />
                <p>require의 default를 통해서 </p>
            </div>
            <hr /> 
            <div>
                <div style={    
                    {
                        width:"100px", 
                        height:"100px",
                        backgroundImage : `url(${'/logo192.png'})`
                    }
                }>
                </div>
                <p>style 백그라운드 이미지 확인 : public에서 들고온값</p>
            </div>
            <hr /> 
            <div>
                <div style={
                    {
                        width:"100px", 
                        height:"100px",
                        backgroundImage : `url(${logo})`
                    }
                }>
                </div>
                <p>style 백그라운드 이미지 확인 : src 들고온값</p>
            </div>
        </div>
    )
}
