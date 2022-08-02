import { Route, Routes, Link } from 'react-router-dom';

import { LandingPage } from '../component/common/LandingPage';
import { AuthGuardedComponent } from '../component/signin/AuthGuardedComponent';
import { Index } from '../component/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthGuardedComponent />}>
          {['/', '/index.html'].map((path) => (
            <Route key={path} path={path} element={<LandingPage />} />
          ))}
          <Route path="/login" element={<Index />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
