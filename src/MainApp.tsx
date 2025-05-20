import React, { lazy, Suspense } from "react";
import LoadingScreen from "./components/backgroundJet/Loader.tsx";

// Lazy load App.tsx
const LazyApp = lazy(() => import("./App"));

function MainApp() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyApp />
    </Suspense>
  );
}

export default MainApp;
