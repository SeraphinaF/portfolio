import './app.css';
import Home from "./screens/Home/Home";
import Portfolio from './screens/Portfolio/Portfolio';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <section className="App">
      <Home/>
      <Portfolio/>
      <Contact/>
    </section>
  );
}

export default App;
