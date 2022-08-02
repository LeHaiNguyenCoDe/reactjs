import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { Error } from '../common/Error';
import { Loading } from '../common/Loading';
import { checkAuth, logout, selectSignin } from './signinSlice';

import './index.css'

export function AuthGuardedComponent() {
  const { loading, loggedIn, error } = useSelector(selectSignin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {error && <Error message={error.message} />}
      <RoutedComponent />
    </>
  );

  function RoutedComponent() {
    const location = useLocation();
    const isLoginPagePathname = location.pathname.includes('login');

    if (loggedIn) {
      if (isLoginPagePathname) {
        const { from = { pathname: '/' } } = location.state;

        return <Navigate to={from.pathname} state={{ from }} replace />;
      }

      return (
        <>
          <Outlet />
          <a style={{"margin-top": "8%"}} href="#" className="animated-button1" onClick={async () => {
            await dispatch(logout());
            navigate('/');
          }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log Out
          </a>
        </>
      );
    } else {
      if (isLoginPagePathname) {
        return <Outlet />;
      }

      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
}
