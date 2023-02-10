import React from 'react'

export default function Select({ label, value, onChange, options }) {
    return (
        <div className='form-group'>
            <label >{label}</label>
            <select value={value} onChange={e => onChange(e.currentTarget.value)}>
                {
                    options.map(o => {
                        return (
                            <option value={o.value}>{o.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
