import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './Routes';
import ReduxProvider from './Redux';
import * as serviceWorker from './serviceWorker';
import './index.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map(route => {
            return(
              <Route key={`routes${route.path}`} path={route.path} component={route.component} exact={route.exact} />
            )
          })}
        </Switch>
      </Router>
    </React.Fragment>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
