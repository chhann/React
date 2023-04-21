import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function ContexBox() {
    return (
        <div>
            <ContexText></ContexText>
        </div>
    )
}

function ContexText () {
    // useContext() ThemContext 를 가져와서 출력하세요
    const context = useContext(ThemeContext)
    return <div>
                <p>{context}</p>
            </div>
}
