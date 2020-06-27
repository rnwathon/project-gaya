import React from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import {
  Card, 
  ColorPicker,
  FlexWrapper,
  Sidebar,
  MediaQueryMax,
  Input,
  InputTextArea,
  InputSelect
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

const Box = styled.div.attrs(props => ({
  style: {
    display: `${props.display}`,
    width: `${props.boxWidth === "" ? "" : props.boxWidth+"px"}`,
    height: `${props.boxHeight === "" ? "" : props.boxHeight+"px"}`,
    overflowX: `${props.overflowX}`,
    overflowY: `${props.overflowY}`
  }
}))`
  background: #f5f6fa;
  border: none;

  ${MediaQueryMax.tablet`

  `}
`

const CssCode = styled.div`
  width: 500px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);

  ${MediaQueryMax.tablet`
    bottom: 260px;
    width: 90%;
  `}
`

class DisplaySizing extends React.Component {
  state = {
    display: "block",
    width: "",
    height: "",
    overflowX: "visible",
    overflowY: "visible",
    content: "Content",
    background: "#45aaf2"
  }

  componentDidMount(){
    Prism.highlightAll()
  }

  handleColor = (e, name) => {
    this.setState({[name]: e.target.value}, () => Prism.highlightAll())
  }

  handleSelect = e => {
    this.setState({[e.target.id] : e.target.value}, () => Prism.highlightAll())
  }

  handleSize = e => {
    this.setState({[e.target.id] : e.target.value}, 
      () => Prism.highlightAll())
  }

  render() {
    const { 
      background, 
      display,
      width,
      height,
      overflowX,
      overflowY,
      content } = this.state;

      console.log(this.state)
    return (
      <React.Fragment>
        <Wrapper background={background}>
          <Box 
            display={display}
            boxWidth={width}
            boxHeight={height}
            overflowX={overflowX}
            overflowY={overflowY}
          >
            {content}
          </Box>
          <CssCode>
            <Card textAlign="center" maxWidth="100%">
              <pre style={{wordWrap: "prewrap"}}>
                <code className="language-css">
{`display: ${display};
overflowX: ${overflowX};
overflowY: ${overflowY}; ${width ? "\nwidth: "+ width + "px;" : ""} ${height ? "\nheight: "+ height + "px;" : ""}
`}
                </code>
              </pre>
            </Card>
          </CssCode>
        </Wrapper>
        <Sidebar tabletHeight="250px">
        <FlexWrapper flexDirection="column">
          <label>Background Color</label>
          <ColorPicker 
            h="40px" 
            w="100%" 
            type="color" 
            value={background} 
            onChange={(e) => this.handleColor(e, "background")}/>
          <label>Display</label>
          <InputSelect id="display" pt=".5rem" pb=".5rem" value={display} onChange={this.handleSelect}>
              <option value="inline">Inline</option>
              <option value="block">Block</option>
              <option value="inline-block">Inline-Block</option>
          </InputSelect>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <label>Width</label>
          <Input id="width" type="number" p=".5rem" value={width} onChange={this.handleSize}/>
          <label>Height</label>
          <Input id="height" type="number" p=".5rem" value={height} onChange={this.handleSize}/>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <label>Overflow X</label>
          <InputSelect id="overflowX" pt=".5rem" pb=".5rem" value={overflowX} onChange={this.handleSelect}>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
            <option value="scroll">Scroll</option>
            <option value="auto">Auto</option>
          </InputSelect>
          <label>Overflow Y</label>
          <InputSelect id="overflowY" pt=".5rem" pb=".5rem" value={overflowY} onChange={this.handleSelect}>
            <option value="visible">Visible</option>
            <option value="hidden">Hidden</option>
            <option value="scroll">Scroll</option>
            <option value="auto">Auto</option>
          </InputSelect>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <label>Content</label>
          <InputTextArea id="content" p=".5rem" rows="7" value={content} onChange={this.handleSelect}>
            {content}
          </InputTextArea>
        </FlexWrapper>
        </Sidebar>
      </React.Fragment>
    )
  }
}

export default DisplaySizing;
