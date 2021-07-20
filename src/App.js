import './App.css'
import SideBar from './Components/Misc/SideBar'
import NavBar from './Components/Misc/NavBar'
import Home from './Components/Misc/CardArea/Home';
import Control from './Components/Misc/CardArea/Controls';
import Report from './Components/Misc/CardArea/Reports';
import {Route,Switch} from 'react-router-dom';
// import Control from './Components/Control';
// import Report from './Components/Report';
import NavBarCent from './Components/NavBarCent';
import SigninContainer from './Components/SignIn/SigninContainer';
import ResetPassContainer from './Components/Reset/ResetPassContainer';
import TroubleSignInCont from './Components/Trouble/TroubleSignInCont';
import SignUpContainer from './Components/SignUp/SignUpContainer';
import AddPhnoContainer from './Components/AddPhno/AddPhnoContainer';
import OnBoardContainer from './Components/OnBoard/OnBoardContainer';
import { useState } from 'react';
function App() {
  const [loggedin, setloggedin] = useState(true)
  return (  
    <>
     <div className="App" >
     <Switch>
       <Route path="/signin" component={SigninContainer} />
       <Route path="/signup" component={SignUpContainer} />
       <Route path="/forgot" component={TroubleSignInCont} />
       <Route path="/reset" component={ResetPassContainer} />
       <Route path="/addphno" component={AddPhnoContainer} />
     <div className="app-deeper" >
       <SideBar/>
       <div className="app-setup">
       <NavBar/>
       <Route path="/getstarted" component={OnBoardContainer} />
       <Route path="/home" component={Home} />
       <Route path="/controls" component={Control} />
       <Route path="/reports" component={Report} />
       </div>
      </div>
     </Switch>
     </div>
    </>
  );
}
export default App;
