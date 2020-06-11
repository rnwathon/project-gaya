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

  randomizeGradient = (e) => {
    e.preventDefault()
    const hexDigits = ["0", "1", "2", "3" , "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    let firstColor = "#"
    let secondColor = "#"
    let angle = Math.floor(Math.random() * 360)

    for(let i=0; i < 6; i++){
      firstColor += hexDigits[Math.floor(Math.random() * hexDigits.length)]
      secondColor += hexDigits[Math.floor(Math.random() * hexDigits.length)]
    }

    this.setState({
      firstColor,
      secondColor,
      angle
    }, () => Prism.highlightAll())
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
          <Card textAlign="center" maxWidth="100%">
            <CardTitle >Gradient Generator</CardTitle>
            <Button onClick={this.randomizeGradient} mb="1.5rem" primary>Generate</Button>
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
