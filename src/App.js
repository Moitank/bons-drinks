import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Contatos from './components/Contatos/Contatos';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sobre from './components/Sobre/Sobre'
import NossoTime from './components/NossoTime/NossoTime';
import Api from './components/Api/Api'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route path="/contatos">
         <Contatos />
        </Route>
        <Route path="/drinks">
         <Api />
        </Route>
        <Route path="/sobre-nos">
         <Sobre />
        </Route>
        <Route path="/nosso-time">
         <NossoTime />
        </Route>
        <Route path="*">
         <h1>Erro 404</h1>
        </Route>
      </Switch>
      <Footer />
      
      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
