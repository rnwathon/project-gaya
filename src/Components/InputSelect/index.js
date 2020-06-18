import styled from 'styled-components';
import {UtilitySelect} from '../Utility';

const InputSelect = styled(UtilitySelect)`
  width: 100%;

  border: 3px solid #2f3640;

  &:focus {
    outline: none;
  }
`

export {
  InputSelect
}