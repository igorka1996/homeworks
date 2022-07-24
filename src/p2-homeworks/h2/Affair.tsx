import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (n: number) => {
        props.deleteAffairCallback(n)
    }// need to fix

    return (
        <div>

                        <span>{props.affair._id} {props.affair.name} {props.affair.priority}</span>
                        <button onClick={() => deleteCallback(props.affair._id)}>X</button>

        </div>
    )
}

export default Affair
