import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {
    const {id} = useParams();
    return (
        <div>
            <p>{id}Article 페이지입니다</p>
        </div>
    )
}
