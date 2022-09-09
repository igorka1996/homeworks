import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['some', 'dark', 'red', 'pink', 'yellow']

function HW12() {
    const dispatch = useDispatch()
    const color = useSelector<AppStoreType, string>(color => color.themeReducer.color)
    const theme = color

    // useDispatch, onChangeCallback
    const onChangeOption = (color: string) => {
        dispatch(changeThemeC(color))
    }

    return (
        <div>
            <div className={s[theme]}>
                <hr/>
                <span className={s[theme + '-text']}>
                homeworks 12
            </span>
                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <hr/>
            </div>
            <SuperSelect options={themes} onChangeOption={onChangeOption}/>
        </div>
    );
}

export default HW12;
