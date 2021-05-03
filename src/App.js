

import Layout from './pages/Layout'
import './assets/style/reset.css'
import {Provider} from 'react-redux'
import store from './store/index'
import {BrowserRouter as Router} from 'react-router-dom'
 
function App() {
  return (
    <Provider store={store}>

      <Router>
      <div className="App">
        <Layout/>
      </div>
      </Router>
     
    
    
    </Provider>
  );
}

export default App;
