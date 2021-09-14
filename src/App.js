import styles from './styles.module.css';
import { lazy, Suspense, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/phonebook/operations/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import authSelectors from './redux/phonebook/selectors/auth-selectors';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);

const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView" */
  ),
);

const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);

const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "RegisterView" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  const isRefreshingCurrentUser = useSelector(
    authSelectors.getRefreshingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {isRefreshingCurrentUser ? (
        <Loader
          type="ThreeDots"
          color="#363636"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <>
          <AppBar />
          <Suspense
            fallback={
              <Loader
                type="ThreeDots"
                color="#363636"
                height={100}
                width={100}
                timeout={3000}
              />
            }
          >
            <Switch>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
}
