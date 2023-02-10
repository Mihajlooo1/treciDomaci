import React from 'react'

export default function Slider({ min, max, value, onChange, label }) {

    const onChangeHandler = e => {
        const val = Number(e.currentTarget.value);
        if (val <= max && val >= min) {
            onChange(val);
        }
    }

    return (
        <div className='form-group'>
            <label >{label}</label>
            <input type='range' value={value} min={min} max={max} onChange={onChangeHandler} />
            <input type='number' value={value} min={min} max={max} onChange={onChangeHandler} />
        </div>
    )
}
