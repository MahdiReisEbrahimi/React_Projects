import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useLoaderData();
  return <EventItem event={data} />;
}

export async function eventDetailLoader({ params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    return new Response(JSON.stringify({ message: "Couldn't fetch event." }), {
      status: 500,
    });
  }

  return await response.json();
}
