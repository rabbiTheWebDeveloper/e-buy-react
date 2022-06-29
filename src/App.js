import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './Pages/About';
import Nav from './component/Nav';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import Contact from './Pages/Contact';
import Form from './Pages/Form';
import Home2 from './Pages/Home2';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <Route exact path='/home2'>
        <Home2></Home2>
        </Route>
        <Route exact path='/about'>
        <About></About>
        </Route>
        <Route exact path='/contact'>
        <Contact></Contact>
        </Route>
        <Route exact path='/my-account'>
        <Form></Form>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
     <Footer></Footer>
    </Router>
  );
}

export default App;
