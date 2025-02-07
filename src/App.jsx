import Layout from 'components/Common/Layout/Layout';
import { Route, Routes } from 'react-router';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, refreshUser } from './redux/auth/operations';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import PrivateRoute from 'components/Common/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

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
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route
              path="/favorites"
              element={<PrivateRoute component={<FavoritesPage />} />}
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
