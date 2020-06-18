import * as Path from "../Constant/path";
import Home from "../Modules/Home/Home";
import GradientGenerator from "../Modules/GradientGenerator/GradientGenerator";
import BoxShadow from "../Modules/BoxShadow/BoxShadow";
import DisplaySizing from "../Modules/DisplaySizing/DisplaySizing";

let routes = [
  { path: Path.Home, name: "Home", component: Home, exact: true },
  { path: Path.GradientGenerator, name: "Gradient Generator", component: GradientGenerator, exact: true },
  { path: Path.BoxShadow, name: "Gradient Generator", component: BoxShadow, exact: true },
  { path: Path.DisplaySizing, name: "Display & Sizing", component: DisplaySizing, exact: true },
]

export default routes