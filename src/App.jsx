import Layout from 'components/Common/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import { Route, Routes } from 'react-router';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, refreshUser } from './redux/auth/operations';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import PrivateRoute from 'components/Common/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          refreshUser({
            user: { email: user.email, name: user.displayName },
            token: user.stsTokenManager.accessToken,
            refreshToken: user.stsTokenManager.refreshToken,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
