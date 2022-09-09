import React from 'react'
import {Box, Slider} from "@mui/material";
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    value: number[]
    handleChange1: (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange = (props: SuperDoubleRangePropsType) => {
    // сделать самому, можно подключать библиотеки

    return (
        <><Box sx={{width: 300}} className={s.span}>
            <span className={s.ro}>{props.value[0]}</span>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={props.value}
                onChange={props.handleChange1}
                valueLabelDisplay="auto"
                disableSwap
            />
            <span className={s.ro}>{props.value[1]}</span>
        </Box>
        </>
    )
}

export default SuperDoubleRange
