import styled from 'styled-components'
import {UtilityDiv} from '../Utility'

const Card = styled(UtilityDiv)`
  background: #f5f6fa;
  padding: 1.5rem;
  border: 5px solid #2f3640;
`

const CardTitle = styled(UtilityDiv)`
  color: #2f3640;
  font-size: ${props => 
    props.size === "lg" ? "3.5rem" :
    props.size === "sm" ? "1.5rem" :
    "2.5rem"
  };
  font-weight: 800;
  margin-bottom: 1.5rem;
`

export {
  Card,
  CardTitle
};