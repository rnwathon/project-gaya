import styled from 'styled-components'
import { UtilityInput } from '../Utility'

const ColorPicker = styled(UtilityInput).attrs(props => ({
  style: {
    backgroundColor: props.value
  }
}))`
  width: ${props => props.w};
  height: ${props => props.h};
  border: 3px solid #2f3640;

  &:focus{
    outline: none;
  }

  &::-webkit-color-swatch-wrapper{
    display: none
  }

  &::-webkit-color-swatch{
    display: none
  }
`

export {
  ColorPicker
};