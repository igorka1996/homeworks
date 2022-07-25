import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Route.module.css'

function Header() {
    const clasNam = (e: boolean) => e ? s.activity : '';
    const stil = {
        textDecoration: 'none',
        padding: '0 15px',
        fontSize: '25px',
        fontWeight: 'bold',
        color: 'green'
    }
    return (
        <div className={s.route}>
            <NavLink style={stil} className={({isActive}) => clasNam(isActive)} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink style={stil} className={({isActive}) => clasNam(isActive)} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink style={stil} className={({isActive}) => clasNam(isActive)} to={PATH.JUNIOR_Plus}>Junior+</NavLink>
            <div className={s.divka}>Menu</div>
        </div>
    )
}

export default Header
