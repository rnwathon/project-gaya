import styled from 'styled-components';
import {UtilityInput, UtilityTextArea} from '../Utility';

const Input = styled(UtilityInput)`
  width: 100%;

  border: 3px solid #2f3640;

  &:focus {
    outline: none;
  } 
`

const InputTextArea = styled(UtilityTextArea)`
  width: 100%;

  border: 3px solid #2f3640;

  &:focus {
    outline: none;
  } 
`

export {
  Input,
  InputTextArea,
}