import styled from 'styled-components'
import {UtilityBtn} from '../Utility'

const Button = styled(UtilityBtn)`
  font-size: 1em;
  font-weight: 800;
  padding: 0.5em 1em;
  border: 3px solid #2f3640;
  background-color: ${props =>
    props.primary ? "#45aaf2" :
    props.secondary ? "#a55eea" :
    props.success ? "#26de81" :
    props.danger ? "#fc5c65" :
    props.warning ? "#fed330" :
    "transparent"
  };
  color: #2f3640;
  width: ${props => props.block && "100%"};

  &:focus {
    outline: none;
  }
`

export {
  Button
};