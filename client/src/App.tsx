import React from 'react';
import HomePage from './page/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MovieDetailsPage from './page/MovieDetails';
import LayoutWrapper from './components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/:movieType/:movieID/details",
      element: <MovieDetailsPage/>
    }
  ]);
  return (
    <>
      <LayoutWrapper>
        <RouterProvider router={router} />
      </LayoutWrapper>
    </>
  );
}

export default App;

