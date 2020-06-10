import * as Path from "../Constant/path";
import Home from "../Modules/Home/Home";
import GradientGenerator from "../Modules/GradientGenerator/GradientGenerator";

let routes = [
  { path: Path.Home, name: "Home", component: Home, exact: true },
  { path: Path.GradientGenerator, name: "Gradient Generator", component: GradientGenerator, exact: true },
]

export default routes