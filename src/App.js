import './App.css'
import SideBar from './SideBar'
import NavBar from './NavBar'
import MainArea from './MainArea';
function App() {
  return (
    <div className="App">
      <div>
        <SideBar />
      </div>
      <div>
        <NavBar />
        <MainArea />

      </div>
    </div>
  );
}
export default App;
