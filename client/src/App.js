import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAuthUser } from './js/actions/authActions';

import AppNavbar from './components/AppNavBar';
import Home from './components/pages/Home';
import PrivateRoute from './components/routes/PrivateRoute';
import Dashboard from './components/pages/Dashboard';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer.isLoading);
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <h1>Spinner....</h1>;
  }

  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
