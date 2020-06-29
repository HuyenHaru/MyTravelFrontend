import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../../assets/css/style.css';
import '../../assets/css/header.css';
import '../../assets/css/footer.css';
import '../../assets/css/responsive.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  HashRouter,
} from 'react-router-dom';

import Menu from '../../features/navbar/Menu';
import Footer from './Footer';
import { getAuthUser } from '../../features/user/user.actions';
import Toastr from './common/Toastr';
import Home from '../../features/home/Home';
import NewsList from '../../features/post/NewsList/NewsList';
import PostDetail from '../../features/post/PostDetailed/PostDetail';
import Login from '../../features/user/Login/Login';
import Register from '../../features/user/Register/Register';
import PrivateRoute from './common/PrivateRoute';
import MyAccount from '../../features/user/MyAccount/MyAccount';
import MyTrip from '../../features/user/MyTrip/MyTrip';
import PostAction from '../../features/post/PostAction/PostAction';
import { setDefaultAxios } from '../utils/helper';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setDefaultAxios();
      dispatch(getAuthUser(token));
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className='wrapper'>
      <HashRouter>
        <Toastr />
        <Menu />
        <main className='main-page'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cam-nang-du-lich' component={NewsList} />
            <Route exact path='/cam-nang-du-lich/:id' component={PostDetail} />
            <Route exact path='/dang-nhap' component={Login} />
            <Route exact path='/dang-ky' component={Register} />
            <PrivateRoute exact path='/tai-khoan' component={MyAccount} />
            <PrivateRoute exact path='/lich-trinh' component={MyTrip} />
            <PrivateRoute
              exact
              path={['/chinh-sua-bai-viet/:id', '/viet-bai']}
              component={PostAction}
            />
          </Switch>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}
