import React from 'react';
import './assets/css/style.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/responsive.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Menu from './components/client/Menu/Menu';
import Footer from './components/client/Footer/Footer';
import Sidebar from './components/client/Sidebar/Sidebar';
export default function App() {
  const showContentMenus = (routes) => {
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
        )
      })
    }
    return <Switch>{result}</Switch>
  }

  return (
    <div className="wrapper">
      <Router>
        <Menu />
        <main className="main-page">
          {/* <Sidebar/> */}
          {showContentMenus(routes)}
        </main>
        <Footer />
      </Router>
    </div>
  );
}
