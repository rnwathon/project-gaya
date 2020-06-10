import styled from 'styled-components'

const UtilityDiv = styled.div`
  width: ${props => props.w};
  height: ${props => props.h};
  min-width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-right: ${props => props.mr};
  margin-left: ${props => props.ml};
  padding: ${props => props.p};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  text-align: ${props => props.textAlign};
`

const UtilityBtn = styled.button`
  width: ${props => props.w};
  height: ${props => props.h};
  min-width: ${props => props.minWidth};
  min-height: ${props => props.minHeight};
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-right: ${props => props.mr};
  margin-left: ${props => props.ml};
  padding: ${props => props.p};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-right: ${props => props.pr};
  padding-left: ${props => props.pl};
  text-align: ${props => props.textAlign};
`

export { 
  UtilityDiv,
  UtilityBtn
};