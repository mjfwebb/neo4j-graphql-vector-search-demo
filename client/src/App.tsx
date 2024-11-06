import { Route, Switch } from "wouter";
import { AdvancedSearch } from "./AdvancedSearch/AdvancedSearch";
import "./App.css";
import { EvenMoreSearch } from "./EvenMoreSearch/EvenMoreSearch";
import { Menu } from "./Menu";
import { SimpleSearch } from "./SimpleSearch/SimpleSearch";

function App() {
  return (
    <>
      <Switch>
        <Route path="/simple-search">
          <SimpleSearch />
        </Route>
        <Route path="/advanced-search">
          <AdvancedSearch />
        </Route>
        <Route path="/even-more">
          <EvenMoreSearch />
        </Route>
        <Route path="*">
          <Menu />
        </Route>
      </Switch>
    </>
  );
}

export default App;
