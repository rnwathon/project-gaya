import React, { useMemo } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import {
  Button, 
  Card, 
  CardTitle, 
  ColorPicker,
  FlexWrapper 
} from '../../Components'

const Wrapper = styled.div.attrs(props => ({
  style: {
    backgroundImage: `linear-gradient(${props.angle}deg, ${props.firstColor} 0%, ${props.secondColor} 100%)`
  }
}))`
  min-height: 100vh;
  padding: 1em;
`

class GradientGenerator extends React.Component {
  state = {
    firstColor: "#e0c3fc",
    secondColor: "#8ec5fc",
    angle: 120
  }

  componentDidMount(){
    Prism.highlightAll()
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

  handleSlider = (e) => {
    this.setState({angle: e.target.value})
  }

  render() {
    const { firstColor, secondColor, angle } = this.state;

    return (
      <Wrapper firstColor={firstColor} secondColor={secondColor} angle={angle}>
        <FlexWrapper 
          justifyContent="center" 
          alignItems="center" 
          minHeight="100vh">
          <Card textAlign="center" maxWidth="100%">
            <CardTitle >Gradient Generator</CardTitle>
            <FlexWrapper justifyContent="space-around" mb="1.5rem">
              <ColorPicker h="100px" w="100px" type="color" value={firstColor} onChange={(e) => this.setState({firstColor: e.target.value})}/>
              <ColorPicker h="100px" w="100px" type="color" value={secondColor} onChange={(e) => this.setState({secondColor: e.target.value})}/>
            </FlexWrapper>
            <FlexWrapper mb="1.5rem" justifyContent="center">
              <input type="range" style={{border: "none"}} min={0} max={360} value={angle} onChange={this.handleSlider}/>
            </FlexWrapper>
            <Button onClick={this.randomizeGradient} mb="1.5rem" mr="1rem" primary>Randomize</Button>
            <Button onClick={this.randomizeGradient} mb="1.5rem" success>Save</Button>
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
