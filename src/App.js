import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/responsive.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Menu from './components/client/Menu/Menu';
import Footer from './components/client/Footer/Footer';
import { getAuthUser } from './redux/actions/user.actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(getAuthUser(token));
    }

    // eslint-disable-next-line
  }, []);
  const showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <div className='wrapper'>
      <Router>
        <Menu />
        <main className='main-page'>
          {/* <Sidebar/> */}
          {showContentMenus(routes)}
        </main>
        <Footer />
      </Router>
    </div>
  );
}
