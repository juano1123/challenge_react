
import Todolist from "./components/Todolist";
import Home from "./components/Home";
import List from "./components/List";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux'
import store  from './redux/Store'
import Detail from "./components/Detail";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <div>
            <Switch>
              <Route exact path='/todo'>
                <Todolist />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/lists'>
                <List />
              </Route>
              <Route exact path='/detail'>
                <Detail />
              </Route>
            </Switch>
          </div>
        </div>
    </Provider>
  );
}

export default App;
