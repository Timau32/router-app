import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Header } from '../../pages';

const Posts = lazy(() => import('../../pages/Posts/Posts'));
const Users = lazy(() => import('../../pages/Users/Users'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route
            path="/posts"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <Posts />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <Users />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
