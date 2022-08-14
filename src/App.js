import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

export const customHistory = createBrowserHistory();  //This maintains custom history

function App() {
  return (
      <div className="app">
        <Router history={customHistory}>
          <Header />
          <Switch>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
