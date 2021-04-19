import { Provider } from "react-redux";

import store from './store';

import "../css/index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">DashBoard</div>

    </Provider>
  );
}

export default App;
