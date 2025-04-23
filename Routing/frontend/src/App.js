import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./dummyComponents/HomePage";
import EventsPage from "./dummyComponents/EventsPage";
import EventDetailPage from "./dummyComponents/EventDetailPage";
import NewEventPage from "./dummyComponents/NewEventPage";
import EditEventPage from "./dummyComponents/EditEventPage";
import Root from "./dummyComponents/Root";
import EventRootLayout from "./dummyComponents/EventRootLayout";
import { eventsLoader } from "./dummyComponents/EventsPage";
import Error from "./dummyComponents/Error";
import { eventDetailLoader } from "./dummyComponents/EventDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
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
          {
            path: "/events/:eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
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
