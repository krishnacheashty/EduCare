import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contex/AuthProvider';
import Arts from './Pages/Academic/Arts/Arts';
import Athletics from './Pages/Academic/Athletics/Athletics';
import Middle from './Pages/Academic/Middle/Middle';
import Upper from './Pages/Academic/Upper/Upper';
import Admission from './Pages/Admission/Admission';
import Event from './Pages/Event/Event';
import Event2 from './Pages/Event/Event2';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LogIn/LogIn/Login';
import PrivetRoute from './Pages/LogIn/PrivetRoute/PrivetRoute';
import Register from './Pages/LogIn/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
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
          <PrivetRoute path="/event">
            <Event></Event>
          </PrivetRoute>
          <Route path="/event2">
            <Event2></Event2>
          </Route>

          <Route path="/admission">
            <Admission></Admission>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>


          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
