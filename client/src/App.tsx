import React from 'react';
import HomePage from './page/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MovieDetailsPage from './page/MovieDetails';
import LayoutWrapper from './components/Layout';
import { Provider } from 'react-redux';
import { store } from './store';

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
    <Provider store={store}>
      <LayoutWrapper>
        <RouterProvider router={router} />
      </LayoutWrapper>
    </Provider>
  );
}

export default App;

