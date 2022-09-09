import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    // onChangeRange?: (value: number) => void
    handleChange2: (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => void
    value1: number[]
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e) // сохраняем старую функциональность
    //
    //     restProps.handleChange1 && restProps.handleChange1(+e.currentTarget.value)
    // }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box sx={{width: 300}} className={s.span}>
                <span className={s.ro}>{restProps.value1[0]}</span>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={restProps.value}
                    onChange={restProps.handleChange2}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                <span className={s.ro}>{restProps.value1[1]}</span>
            </Box>
        </>
    )
}

export default SuperRange
