import React, { ReactNode } from 'react'

type CardProps = {
    round?: string
    hasBoxShadow?: boolean
    children?: ReactNode | string
    cardStyles?: object
}

const Card = ({ round, hasBoxShadow, children, cardStyles }: CardProps) => {
    return (
        <div
            style={{
                borderRadius: round ?? '16px',
                backgroundColor: 'white',
                border: hasBoxShadow ? '1px solid #ccc' : 'none',
                boxShadow: hasBoxShadow
                    ? '0px 6px 12px rgba(0, 0, 0, 0.06)'
                    : 'none',
                ...cardStyles,
            }}
        >
            {children}
        </div>
    )
}

Card.displayName = 'Card'

export default Card
