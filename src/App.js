import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contatos from './components/Contatos/Contatos';


function App() {
  return (
    <div className="App">
      <Header />
      <Contatos />
      {/* <Home /> */}
      <Footer />
    
    </div>
  );
}

export default App;
