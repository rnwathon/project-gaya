import styled from 'styled-components'
import {UtilityDiv} from '../Utility'

const FlexWrapper = styled(UtilityDiv)`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export {
  FlexWrapper
};