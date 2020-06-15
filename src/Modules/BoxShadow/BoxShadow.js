import React from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import {
  Button, 
  Card, 
  CardTitle, 
  ColorPicker,
  FlexWrapper,
  Sidebar,
  MediaQueryMax,
  InputSlider
} from '../../Components'

const Wrapper = styled.div.attrs(props => ({
  style: {
    backgroundColor: `${props.background}`
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

const Box = styled(Card).attrs(props => ({
  style: {
    boxShadow: `${props.horizontal}px ${props.vertical}px ${props.blur}px ${props.spread}px ${props.color}`
  }
}))`
  border: none;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  height: 300px;
  width: 300px;

  ${MediaQueryMax.tablet`
    height: 150px;
    width: 150px;
    top: 15%;
    transform: translate(-50%, -15%);
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

class BoxShadow extends React.Component {
  state = {
    horizontal: 0,
    vertical: 0,
    blur: 0,
    spread: 0,
    color: "#000000",
    background: "#45aaf2"
  }

  componentDidMount(){
    Prism.highlightAll()
  }

  handleSlider = (e) => {
    this.setState({[e.target.id]: e.target.value}, () => Prism.highlightAll())
  }

  handleColor = (e, name) => {
    this.setState({[name]: e.target.value}, () => Prism.highlightAll())
  }

  render() {
    const { background, horizontal, vertical, blur, spread, color } = this.state;

    return (
      <React.Fragment>
        <Wrapper background={background}>
          <Box 
            horizontal={horizontal}
            vertical={vertical}
            blur={blur}
            spread={spread}
            color={color}
          />
          <CssCode>
            <Card textAlign="center" maxWidth="100%">
              <CardTitle>CSS Box Shadow</CardTitle>
              <pre style={{wordWrap: "prewrap"}}>
                <code className="language-css">
                  {`
-webkit-box-shadow : ${horizontal}px, ${vertical}px ${blur}px ${spread}px ${color};  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
-moz-box-shadow   : ${horizontal}px, ${vertical}px ${blur}px ${spread}px ${color};  /* Firefox 3.5 - 3.6 */
box-shadow       : ${horizontal}px, ${vertical}px ${blur}px ${spread}px ${color};  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
                  `}
                </code>
              </pre>
            </Card>
          </CssCode>
        </Wrapper>
        <Sidebar>
          <FlexWrapper flexDirection="column">
            <label>Background Color</label>
            <ColorPicker 
              h="100px" 
              w="100%" 
              type="color" 
              value={background} 
              onChange={(e) => this.handleColor(e, "background")}/>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <label>Horizontal Offset</label>
            <InputSlider 
              id="horizontal"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={horizontal} 
              onChange={this.handleSlider}/>
            <label>Vertical Offset</label>
            <InputSlider 
              id="vertical"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={vertical} 
              onChange={this.handleSlider}/>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <label>Shadow Color</label>
            <ColorPicker 
              h="100px" 
              w="100%" 
              type="color" 
              value={color} 
              onChange={(e) => this.handleColor(e, "color")}/>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <label>Blur</label>
            <InputSlider 
              id="blur"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={blur} 
              onChange={this.handleSlider}/>
            <label>Spread</label>
            <InputSlider 
              id="spread"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={spread} 
              onChange={this.handleSlider}/>
          </FlexWrapper>
        </Sidebar>
      </React.Fragment>
    )
  }
}

export default BoxShadow;
