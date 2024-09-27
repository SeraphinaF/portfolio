import './app.css';
import Home from "./screens/Home/Home";
import Portfolio from './screens/Portfolio/Portfolio';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
