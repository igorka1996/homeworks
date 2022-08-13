import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import './Select.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }
    const mappedOptions: JSX.Element[] = options.map((e, i) => <option key={i}
                                                                       selected={restProps.value === e}>{e}</option>); // map options with key


    return (
        <select className={'select-css'} value={restProps.value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
