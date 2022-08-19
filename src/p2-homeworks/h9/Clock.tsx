import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


type Date = {
    hours: number | undefined
    minutes: number | undefined
    seconds: number | undefined
}


function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    console.log(timerId)
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate({
                ...date,
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds()
            })
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    let t = 12
    console.log(String(t).length)

    const stringTime = date ? `${String(date.hours).length === 1 ? '0' + date.hours : date.hours} : ${String(date.minutes).length === 1 ? '0' + date.minutes : date.minutes} : ${String(date.seconds).length === 1 ? '0' + date.seconds : date.seconds}` : '' // fix with date
    const stringDate = `${String(new Date().getDate()).length === 1 ? '0' + new Date().getDate() : new Date().getDate()}.${String(new Date().getMonth() + 1).length === 1 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}.${new Date().getFullYear()}` // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
