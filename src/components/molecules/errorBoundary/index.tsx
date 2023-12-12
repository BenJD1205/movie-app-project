import React, { ReactNode } from 'react'
export const ErrorBoundary: React.FC<{ children?: ReactNode }> = (props) => {
    return <>{props.children}</>
}
