import { render } from '@testing-library/react'
import Button from '../../atoms/button'

describe('Button component', () => {
    test('should render button', () => {
        render(<Button>Hello</Button>)
    })
})
