import { render } from '@testing-library/react'
import Input from '../../atoms/input'

describe('Input component', () => {
    test('should render input', () => {
        render(<Input label="test" placeholder="test" />)
    })
})
