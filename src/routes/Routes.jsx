import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "../pages/Page404";
import PagePIT from "../pages/PagePIT";
import PageTutorial from "../pages/PageTutorial";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/pit-tae">
          <PagePIT />
        </Route>
        <Route exact path="/pit-tae/tutorial">
          <PageTutorial />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
