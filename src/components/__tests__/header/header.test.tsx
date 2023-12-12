import { render } from '@testing-library/react'
import Header from '../../molecules/header'

describe('Header component', () => {
    test('should render header', () => {
        render(<Header />)
    })
})
