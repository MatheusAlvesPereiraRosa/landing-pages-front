import { Dummy } from '.'
import {renderTheme} from '../../styles/render-theme'

describe('<Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>)
  })
})