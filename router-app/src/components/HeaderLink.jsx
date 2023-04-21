import React from 'react'
import '../css/headerlink.css'

import { Link, NavLink } from 'react-router-dom'

// 링크를 모아서 헤더에 고정하기
export default function HeaderLink() {
    const fruit = "banana";
    return (
        <div>
            {/* a태그 대신 컴포넌트의 주소로 이동 */}
            <NavLink 
            className={({isActive})=>isActive ? "link-style":undefined} to = "/about">
                About
            </NavLink><br />
            {/* to의 속성값으로 자바스크립의 문자열 */}

            <NavLink 
            className={({isActive})=>isActive ? "link-style":undefined}
            to = {`/story/${fruit}`}>Story</NavLink><br />
            
            <NavLink 
            className={({isActive})=>isActive ? "link-style":undefined}
            to="/articles">Articles</NavLink>

            <NavLink 
            className={({isActive})=>isActive ? "link-style":undefined}
            to="/story2">Story2List</NavLink>

            <NavLink  
            to="/navigate"
            className={({isActive})=>isActive ? "link-style":undefined}
            end  //주소가 완전히 일치할때만 calss 이름 추가
            >
            Navigate 
            </NavLink >
        </div>
    )
}
