
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import Lifecycle from './Lifecycle'
import Functional from './Functional'
import {

  BrowserRouter,
  Switch,
  Route


 }from "react-router-dom";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Switch>
      <Route path="/"exact component={Login}>
    
     </Route>
     <Route path="/dashboard"component={Dashboard}>
     
     </Route>
     <Route path="/Lifecycle"component={Lifecycle}>
     
     </Route>
     <Route path="/Functional"component={Functional}>
     </Route>
     <Route path="/edit/:id"component={Login}>
     
     
     </Route>
     
     </Switch>
    </div>
    </BrowserRouter>);
}

export default App;
