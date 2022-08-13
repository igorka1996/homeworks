import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import './RAdio.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div>
            <label className={value === o ? 'active' : ''} key={name + '-' + i}>
                <input
                    className={'inp'}
                    type={name}
                    onChange={onChangeCallback}
                    value={o}
                    checked={value === o}
                />
                {o}
            </label>
        </div>
    )) : []

    return (
        <>
            <div>
                {mappedOptions}
            </div>
        </>
    )
}

export default SuperRadio
