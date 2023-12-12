import BackgroundAuth from '../../assets/images/bg-login.jpg'
import { FC, ReactNode } from 'react'

const WrapAuth: FC<{
    children: ReactNode | string
    wrapStyles?: any
    boxProps?: any
}> = ({ children, wrapStyles, boxProps }) => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'relative',
                backgroundImage: `url(${BackgroundAuth})`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                ...wrapStyles,
            }}
            {...boxProps}
        >
            <div
                style={{
                    padding: '0 150px',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default WrapAuth
