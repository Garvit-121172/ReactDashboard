import './App.css'
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'
import MainArea from './Components/MainArea';
import {Route,Switch} from 'react-router-dom';
import Control from './Components/Control';
import Report from './Components/Report';
function App() {
  return (
    <div className="App">
      <div >
        <SideBar  />
      </div>
      <div>
        <NavBar />
      <Switch>
          <Route exact path="/" component={MainArea} />
          <Route exact path="/control" component={Control} />
          <Route exact path="/report" component={Report} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
