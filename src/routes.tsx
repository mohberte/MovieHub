import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviePage from "./pages/MoviePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MoviePage /> },
      { path: 'movie/:id', element: <MovieDetailPage /> }
    ]
  }
]);

export default router;