import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/home/Home'));
const Gallery = lazy(() => import('./components/gallery/Gallery'));
const GalleryReact = lazy(() => import('./components/sportbar/Sportbar'));
const SharedLayout = lazy(() => import('./components/layout/Layout'));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sportbar" element={<GalleryReact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
