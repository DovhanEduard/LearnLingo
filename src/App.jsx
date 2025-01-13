import Layout from 'components/Common/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
// import { useEffect, lazy, Suspense } from 'react';

// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
// const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
// const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));

function App() {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
