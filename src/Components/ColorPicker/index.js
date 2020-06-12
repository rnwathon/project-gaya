import styled from 'styled-components'

const ColorPicker = styled.input.attrs(props => ({
  style: {
    backgroundColor: props.value
  }
}))`
  width: ${props => props.w};
  height: ${props => props.h};
  border: 3px solid #2f3640;
  border-radius: 50%;

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