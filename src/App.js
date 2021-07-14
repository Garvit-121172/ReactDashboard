import './App.css'
import SideBar from './Components/Misc/SideBar'
import NavBar from './Components/Misc/NavBar'
import MainArea from './Components/Misc/MainArea';
// import {Route,Switch} from 'react-router-dom';
// import Control from './Components/Control';
// import Report from './Components/Report';
// import NavBarCent from './Components/NavBarCent';
// import SigninContainer from './Components/SignIn/SigninContainer';
// import ResetPassContainer from './Components/Reset/ResetPassContainer';
// import TroubleSignInCont from './Components/Trouble/TroubleSignInCont';
// import SignUpContainer from './Components/SignUp/SignUpContainer';
// import AddPhnoContainer from './Components/AddPhno/AddPhnoContainer';
import OnBoardContainer from './Components/OnBoard/OnBoardContainer';
// import AddDevice0 from './Components/AddDevice/AddDevice0';
function App() {
  return (
    <div className="App" >
     <div className="app-deeper" >
       <SideBar/>
       <div className="app-setup">
       <NavBar/>
       {/* <AddDevice0/> */}
       <MainArea/>
      {/* <OnBoardContainer/> */}
       </div>
     </div>
      {/* <NavBarCent/> */}
      {/* <NavBar/> */}
      {/* <SigninContainer/> */}
      {/* <SignUpContainer /> */}
      {/* <ResetPassContainer/> */}
      {/* <TroubleSignInCont/> */}
      {/* <AddPhnoContainer/> */}
    </div>
  );
}
export default App;
