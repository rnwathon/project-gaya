import React from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import {
  Button, 
  Card, 
  CardTitle, 
  FlexWrapper 
} from '../../Components'

class GradientGenerator extends React.Component {
  state = {
    firstColor: "#e0c3fc",
    secondColor: "#8ec5fc",
    angle: 120
  }

  render() {
    const { firstColor, secondColor, angle } = this.state;

    const Wrapper = styled.div`
      min-height: 100vh;
      padding: 1em;
      background-image: linear-gradient(${angle}deg, ${firstColor} 0%, ${secondColor} 100%);
    `

    return (
      <Wrapper>
        <FlexWrapper 
          justifyContent="center" 
          alignItems="center" 
          minHeight="100vh">
          <Card textAlign="center">
            <CardTitle >Gradient Generator</CardTitle>
            <Button mb="1.5rem" primary>Generate</Button>
            <pre>
              <code className="language-css">
                {`background-image: linear-gradient(${angle}deg, ${firstColor} 0%, ${secondColor} 100%);`}
              </code>
            </pre>
          </Card>
        </FlexWrapper>
      </Wrapper>
    )
  }
}

export default GradientGenerator;
