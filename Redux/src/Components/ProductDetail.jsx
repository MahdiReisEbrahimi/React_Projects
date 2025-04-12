import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams();
  return <p className="text-white text-center mt-40">{param.productId}</p>;
}
