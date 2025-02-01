import Layout from 'components/Common/Layout/Layout';
import FavoritesPage from 'pages/FavoritesPage';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import { Route, Routes } from 'react-router';
// import { useEffect, lazy, Suspense } from 'react';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

function App() {
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
