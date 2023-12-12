import { render } from '@testing-library/react'
import Loading from '../../molecules/loading'

describe('Loading component', () => {
    test('should render loading when isLoading true', () => {
        render(<Loading isLoading={true} />)
    })
})
