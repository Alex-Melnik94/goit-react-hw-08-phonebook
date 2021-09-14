import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import authSelectors from '../redux/phonebook/selectors/auth-selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
