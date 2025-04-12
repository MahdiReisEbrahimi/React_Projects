import { useParams } from "react-router-dom";

export default function EditEventPage() {
  const param = useParams();
  return (
    <h1 style={{ font: "2rem", color: "white" }}>
      hello eventId : {param.eventId}
    </h1>
  );
}
