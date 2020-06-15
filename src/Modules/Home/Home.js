import React from "react";
import * as Path from '../../Constant/path';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>Project Gaya</h1>
        <br />
        <Link to={Path.GradientGenerator}>Gradient Generator/</Link>
        <Link to={Path.BoxShadow}>Box Shadow/</Link>
      </React.Fragment>
    )
  }
}

export default Home;