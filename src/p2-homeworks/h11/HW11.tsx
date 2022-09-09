import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

const minDistance = 10

function HW11() {
    const [value2, setValue2] = useState(0)
    const [value1, setValue1] = useState([value2, 100])

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue2(Math.min(newValue, value1[1] - minDistance));
            setValue1([Math.min(newValue, value1[1] - minDistance), value1[1]])
        } else {
            return;
        }
    };

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            return;
        } else {
            setValue1([value1[0], Math.max(newValue[1], value2 + minDistance)]);
        }
    };

    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div>

                <SuperRange
                    handleChange2={handleChange2}
                    value1={value1}
                    value={value2}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <SuperDoubleRange
                    value={value1}
                    handleChange1={handleChange1}
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
