import React, { lazy, Suspense } from 'react';

import { Routes as Switch, Route } from 'react-router-dom';

import LoadingFullScreen from '~/components/LoadingFullScreen';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));

export default function Routes() {
  return (
    <Suspense fallback={<LoadingFullScreen />}>
      <Header />

      <Switch>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

      </Switch>

      <Footer />
    </Suspense>
  );
}
