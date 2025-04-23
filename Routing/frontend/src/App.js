import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./dummyComponents/HomePage";
import EventsPage from "./dummyComponents/EventsPage";
import EventDetailPage from "./dummyComponents/EventDetailPage";
import NewEventPage from "./dummyComponents/NewEventPage";
import EditEventPage from "./dummyComponents/EditEventPage";
import Root from "./dummyComponents/Root";
import EventRootLayout from "./dummyComponents/EventRootLayout";
import { eventsLoader } from "./dummyComponents/EventsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/events",
        element: <EventRootLayout />,
        children: [
          {
            path: "/events",
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: "/events/:eventId", element: <EventDetailPage /> },
          { path: "/events/new", element: <NewEventPage /> },
          { path: "/events/:eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
