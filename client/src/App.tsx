import { Route, Switch } from "wouter";
import { AdvancedSearch } from "./AdvancedSearch/AdvancedSearch";
import "./App.css";
import { EvenMoreSearch } from "./EvenMoreSearch/EvenMoreSearch";
import { SimpleSearch } from "./SimpleSearch/SimpleSearch";

function App() {
  return (
    <>
      <h1>Vector search demo</h1>
      <Switch>
        <Route path="/search-with-traversal">
          <AdvancedSearch />
        </Route>
        <Route path="/even-more">
          <EvenMoreSearch />
        </Route>
        <Route path="*">
          <SimpleSearch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
