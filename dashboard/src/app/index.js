import { Provider } from "react-redux";
import { HashRouter as Router, Route } from 'react-router-dom';

import Pedidos from './containers/Pedidos';
import store from './store';

import base from './containers/HOC/Base';

import "../css/index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path={"/"} exact component={base(Pedidos)} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
