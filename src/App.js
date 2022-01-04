import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Arts from './Pages/Academic/Arts/Arts';
import Athletics from './Pages/Academic/Athletics/Athletics';
import Middle from './Pages/Academic/Middle/Middle';
import Upper from './Pages/Academic/Upper/Upper';
import Admission from './Pages/Admission/Admission';
import Event from './Pages/Event/Event';
import Event2 from './Pages/Event/Event2';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/upper">
            <Upper></Upper>
          </Route>
          <Route path="/middle">
            <Middle></Middle>
          </Route>
          <Route path="/arts">
            <Arts></Arts>
          </Route>
          <Route path="/athletics">
            <Athletics></Athletics>
          </Route>
          <Route path="/event">
            <Event></Event>
          </Route>
          <Route path="/event2">
            <Event2></Event2>
          </Route>

          <Route path="/admission">
            <Admission></Admission>
          </Route>


          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
