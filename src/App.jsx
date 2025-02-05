import Layout from 'components/Common/Layout/Layout';
import FavoritesPage from 'pages/FavoritesPage';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import { Route, Routes } from 'react-router';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, refreshUser } from './redux/auth/operations';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
// import { useEffect, lazy, Suspense } from 'react';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

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
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
