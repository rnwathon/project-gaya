import styled from 'styled-components';
import {UtilityInput} from '../Utility';

const InputSlider = styled(UtilityInput)`
  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: #2f3640;
    border: 0;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    margin-top: -6px;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 3px solid #2f3640;
    cursor: pointer;
    -webkit-appearance: none;
  }
  
  &:focus::-webkit-slider-runnable-track {
    background: #3a424f;
  }

  &::-moz-range-track {
    background: #2f3640;
    border: 0;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 3px solid #2f3640;
    cursor: pointer;
  }

  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 6px 0;
    color: transparent;
    width: 100%;
    height: 8px;
    cursor: pointer;
  }

  &::-ms-fill-lower {
    background: #242a31;
    border: 0;
  }

  &::-ms-fill-upper {
    background: #2f3640;
    border: 0;
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 3px solid #2f3640;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  &:focus::-ms-fill-lower {
    background: #2f3640;
  }

  &:focus::-ms-fill-upper {
    background: #3a424f;
  }

  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    & {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }
`

export {
  InputSlider
}