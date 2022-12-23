import './App.css';
import { Navbar } from './components';
import About from './containers/about/About';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Team from './containers/team/Team';

function App() {
  return (

    <div className="App">
      <div className='image__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
