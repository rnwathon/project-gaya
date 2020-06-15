import * as Path from "../Constant/path";
import Home from "../Modules/Home/Home";
import GradientGenerator from "../Modules/GradientGenerator/GradientGenerator";
import BoxShadow from "../Modules/BoxShadow/BoxShadow";

let routes = [
  { path: Path.Home, name: "Home", component: Home, exact: true },
  { path: Path.GradientGenerator, name: "Gradient Generator", component: GradientGenerator, exact: true },
  { path: Path.BoxShadow, name: "Gradient Generator", component: BoxShadow, exact: true },
]

export default routes