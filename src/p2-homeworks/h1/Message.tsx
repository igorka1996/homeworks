import React from 'react'
import s from './Message.module.css'


type strTyp = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: strTyp) {
    return (
        <div className={s.message}>
            <img width={50} src={props.avatar}/>
            <span className={s.span}><div className={s.name}>{props.name}</div>
                <div className={s.time}><p className={s.mes}>{props.message}</p><p className={s.tm}>{props.time}</p></div></span>
        </div>
    )
}

export default Message
