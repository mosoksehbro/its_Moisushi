  import './App.css';
  import './styles/landingPage.css'
  import NavBar from '../src/components/NavBar.js';
  import Intro from '../src/components/Intro.js';
  import Menu from '../src/components/Menu.js';
  import Footer from '../src/components/Footer.js'

function App() {
  return (
      <div>
        {/* Intro Section */}
        <div className ='myBG'>
          <NavBar/>
          <Intro/>
        </div>
          {/* End Intro Section */}
          
          {/* Menu Section  */}
          <div className = 'ourMenu'>
            <Menu/>
          </div>
          {/* End Menu Section */}
          {/* Footer Section */}
          <div>
            <Footer/>
          </div>
      </div>
    );
}

export default App;
