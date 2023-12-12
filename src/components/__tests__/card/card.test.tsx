import { render } from '@testing-library/react'
import Card from '../../atoms/card'

describe('Card component', () => {
    test('should render card', () => {
        render(<Card />)
    })
})
