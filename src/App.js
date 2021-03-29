import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
    <h1>Hello Arpitha, you are brave and beautiful</h1>
    <Header></Header>
    <div className="app__page">
    <Sidebar/>
    <RecommendedVideos/>
    </div>
    </div>
  );
}

export default App;
