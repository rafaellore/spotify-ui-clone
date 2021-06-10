import './App.css';
import SideBar from './components/SideBar';
import Main from './components/Main';
import BottomBar from './components/BottomBar';
import BottomMobile from './components/BottomMobile';
function App() {
  return (
    <>
    <div className="app">
      <SideBar/>
      <Main/>
      <BottomBar/>
      <BottomMobile/>
    </div>
    </>
  );
}

export default App;
