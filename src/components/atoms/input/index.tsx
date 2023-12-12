import React from 'react'
import './input.style.scss'

export type InputProps = {
    label?: string
    wrapInputStyles?: object
    error?: boolean
    errorMessage?: string
    type?: string
    value?: string | number
    disabled?: boolean
    name?: string
    placeholder?: string
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
    value,
    label,
    error,
    disabled,
    wrapInputStyles,
    errorMessage,
    placeholder,
    name,
    type = 'text',
    startAdornment,
    endAdornment,
}) => {
    return (
        <div className="input" style={wrapInputStyles}>
            <p className="input-label">{label}</p>
            <div className="input-content">
                {startAdornment}
                <input
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    className="input-field"
                    disabled={disabled}
                    name={name}
                />
                {endAdornment}
            </div>
            {error && errorMessage && (
                <p className="input-message" style={{ marginTop: 5 }}>
                    {errorMessage}
                </p>
            )}
        </div>
    )
}

export default Input
