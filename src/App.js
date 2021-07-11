import './App.css'
// import SideBar from './Components/SideBar'
// import NavBar from './Components/NavBar'
// import MainArea from './Components/MainArea';
// import {Route,Switch} from 'react-router-dom';
// import Control from './Components/Control';
// import Report from './Components/Report';
import NavBarCent from './Components/NavBarCent';
import SigninContainer from './Components/SignIn/SigninContainer';
import ResetPassContainer from './Components/Reset/ResetPassContainer';
import TroubleSignInCont from './Components/Trouble/TroubleSignInCont';
import SignUpContainer from './Components/SignUp/SignUpContainer';
import AddPhnoContainer from './Components/AddPhno/AddPhnoContainer';
import OnBoardContainer from './Components/OnBoard/OnBoardContainer';
function App() {
  return (
    <div className="App" >
      <NavBarCent/>
      <SigninContainer/>
      {/* <SignUpContainer /> */}
      {/* <ResetPassContainer/> */}
      {/* <TroubleSignInCont/> */}
      {/* <AddPhnoContainer/> */}
      {/* <OnBoardContainer/> */}
    </div>
  );
}
export default App;
