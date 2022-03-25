import React, { lazy, Suspense } from 'react';

import { Routes as Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));

export default function Routes() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

      </Switch>
    </Suspense>
  );
}
