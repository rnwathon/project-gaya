import React from 'react'
import styled, {css} from 'styled-components'
import Prism from 'prismjs'
import {
  Button, 
  Card, 
  CardTitle, 
  ColorPicker,
  FlexWrapper,
  Sidebar,
  MediaQueryMax
} from '../../Components'

const Wrapper = styled.div.attrs(props => ({
  style: {
    backgroundImage: `linear-gradient(${props.angle}deg, ${props.firstColor} 0%, ${props.secondColor} 100%)`
  }
}))`
  position: relative;
  min-height: 100vh;
  padding: 1em;
  margin-right: 300px;

  ${MediaQueryMax.tablet`
    margin-right: 0;
  `}
`

const CssCode = styled.div`
  width: 500px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);

  ${MediaQueryMax.tablet`
    bottom: 210px;
    width: 90%;
  `}
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
    this.setState({angle: e.target.value}, () => Prism.highlightAll())
  }

  render() {
    const { firstColor, secondColor, angle } = this.state;

    return (
      <React.Fragment>
        <Wrapper firstColor={firstColor} secondColor={secondColor} angle={angle}>
          <CssCode>
            <Card textAlign="center" maxWidth="100%">
              <CardTitle >Gradient Generator</CardTitle>
              <pre style={{wordWrap: "prewrap"}}>
                <code className="language-css">
                  {`background-image: linear-gradient(${angle}deg, ${firstColor} 0%, ${secondColor} 100%);`}
                </code>
              </pre>
            </Card>
          </CssCode>
        </Wrapper>
        <Sidebar>
          <FlexWrapper flexDirection="column">
            <label>First Color</label>
            <ColorPicker 
              h="100px" 
              w="100%" 
              type="color" 
              value={firstColor} 
              onChange={(e) => this.setState({firstColor: e.target.value})}/>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
          <label>Second Color</label>
          <ColorPicker 
            h="100px" 
            w="100%" 
            type="color" 
            value={secondColor} 
            onChange={(e) => this.setState({secondColor: e.target.value})}/>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <label>Angle</label>
            <input 
              type="range" 
              style={{border: "none", marginBottom: "1rem"}} 
              min={0} 
              max={360} 
              value={angle} 
              onChange={this.handleSlider}/>
            <Button 
              onClick={this.randomizeGradient} 
              block
              primary>
                Randomize
            </Button>
          </FlexWrapper>
        </Sidebar>
      </React.Fragment>
    )
  }
}

export default GradientGenerator;
