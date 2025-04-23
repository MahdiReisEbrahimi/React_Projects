import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventsPage() {
  const data = useLoaderData();
  if (!data.isResOk) {
    return <p>{data.errorMessage}</p>;
  }
  const events = data.resData.events;
  return (
    <>
      <h1 style={{ font: "2rem", color: "white" }}>This is Events Page</h1>
      <div style={{ margin: "2rem" }}>
        <EventsList events={events} />
      </div>
    </>
  );
}

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/eventsss");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "couldnt fetch events." }), {
      status: 505,
    });
  } else {
    const resData = await response.json();
    return { isResOk: true, resData };
  }
}
