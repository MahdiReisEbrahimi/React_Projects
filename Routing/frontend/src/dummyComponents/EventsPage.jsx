import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

// const EVENTS = [
//   { eventId: 1, title: "Iran 2025" },
//   { eventId: 2, title: "Germany 2024" },
//   { eventId: 3, title: "Iraq 2025" },
//   { eventId: 4, title: "America 2025" },
// ];

export default function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <h1 style={{ font: "2rem", color: "white" }}>This is Events Page</h1>
      <div style={{ margin: "2rem" }}>
        <ul>
          {events.map((event) => (
            <li key={event.key}>
              <Link to={`/events/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
        <div>{}</div>
      </div>
    </>
  );
}
