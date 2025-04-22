import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const param = useParams();
  return (
    <h1 style={{ font: "2rem", color: "white" }}>This is Events Detail Page | id : {param.eventId}</h1>
  );
}
