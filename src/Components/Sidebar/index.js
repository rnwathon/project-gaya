import styled from 'styled-components'
import {MediaQueryMax, UtilityDiv} from '../Utility'

const Sidebar = styled(UtilityDiv)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #f5f6fa;
  padding: 1.5rem;
  border-left: 5px solid #2f3640;
  display: flex;
  flex-direction: column;

  & > * {
    flex-shrink: 0;
    width: 100%;
  };

  & label {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  ${MediaQueryMax.tablet`
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 200px;
    overflow-x: scroll;
    overflow-y: hidden;
    border-left: none;
    border-top: 5px solid #2f3640;
    flex-direction: row;
    align-items: start;

    & > * {
      flex-shrink: 0;
      width: 200px;
      margin-right: 1.5rem;
    };
  `}
`

export {
  Sidebar
};