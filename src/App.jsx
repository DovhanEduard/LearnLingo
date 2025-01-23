import Layout from 'components/Common/Layout/Layout';
import FavoritesPage from 'pages/FavoritesPage';
import HomePage from 'pages/HomePage/HomePage';
import LogInPage from 'pages/LogInPage';
import RegistrationPage from 'pages/RegistrationPage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { login, refreshUser } from './redux/auth/operations';
// import { useEffect, lazy, Suspense } from 'react';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      login({
        email: 'test12@gmail.com',
        password: '12345678',
      })
    );
    dispatch(refreshUser());
  }, []);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
