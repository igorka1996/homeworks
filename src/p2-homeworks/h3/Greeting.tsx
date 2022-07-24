import React, {KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error: '' // need to fix with (?:)

    return (
        <div>
            <input value={name}  onChange={(e) => setNameCallback(e.currentTarget.value)} className={inputClass}/>
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
            <div><span className={s.someClass}>{error}</span></div>
        </div>
    )
}

export default Greeting
