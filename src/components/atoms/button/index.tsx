import React from 'react'
import './button.style.scss'

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    buttonStyles?: object
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    buttonStyles,
    className,
}) => {
    return (
        <button
            type="submit"
            className={className}
            onClick={onClick}
            style={buttonStyles}
        >
            {children}
        </button>
    )
}

export default Button
