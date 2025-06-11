import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discover from "./pages/Discover";
import TopArtists from "./pages/TopArtists";
import TopCharts from "./pages/TopCharts";
import AroundYou from "./pages/AroundYou";
import RootLayout from "./components/RootLayout";
import Error from "./pages/Error";
import { loader as disCoverLoader } from "./pages/Discover";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader:disCoverLoader,
        element: <Discover />,
      },
      {
        path: "/top-artists",
        element: <TopArtists />,
      },
      {
        path: "/top-charts",
        element: <TopCharts />,
      },
      {
        path: "/around-you",
        element: <AroundYou />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
