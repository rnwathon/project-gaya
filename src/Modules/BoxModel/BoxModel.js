import React from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import {
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
    margin: `${props.margin}px`,
    padding: `${props.padding}px`,
    border: `solid ${props.border}px black`,
  }
}))`
  height: 300px;
  width: 300px;

  ${MediaQueryMax.tablet`
    height: 150px;
    width: 150px;
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

class BoxModel extends React.Component {
  state = {
    margin: 0,
    padding: 0,
    border: 0,
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
    const { background, margin, padding, border } = this.state;

    return (
      <React.Fragment>
        <Wrapper background={background}>
          <Box 
            margin={margin}
            padding={padding}
            border={border}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ultrices ultrices. Vestibulum tempus pellentesque quam, in dapibus libero vestibulum vitae. Aenean tincidunt porta massa vel ornare. 
          </Box>
          <CssCode>
            <Card textAlign="center" maxWidth="100%">
              <CardTitle>CSS Box Model</CardTitle>
              <pre style={{wordWrap: "prewrap"}}>
                <code className="language-css">
                  {`
margin: ${margin}px;
padding: ${padding}px;
border: solid ${border}px black;
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
            <label>Margin</label>
            <InputSlider 
              id="margin"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={margin} 
              onChange={this.handleSlider}/>
            <label>Padding</label>
            <InputSlider 
              id="padding"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={padding} 
              onChange={this.handleSlider}/>
          </FlexWrapper>
          <FlexWrapper flexDirection="column">
            <label>Border</label>
            <InputSlider 
              id="border"
              type="range" 
              mb="1rem"
              min={-50} 
              max={50} 
              value={border} 
              onChange={this.handleSlider}/>
          </FlexWrapper>
        </Sidebar>
      </React.Fragment>
    )
  }
}

export default BoxModel;
