import { Link } from "react-router-dom";
export default function Products() {
  const PRODUCTS = [
    {
      title: "shirt1",
      id: 1,
    },
    {
      title: "skirt2",
      id: 2,
    },
    {
      title: "دمپایی3",
      id: 3,
    },
  ];

  return (
    <div className="text-white">
      <p> Products Page</p>
      <Link to={"/product/p1"}>p1</Link>
      {PRODUCTS.map((product) => (
        <Link
          key={product.id}
          className="flex flex-col text-center"
          to={`/product/${product.id}`}
        >
          {product.title}
        </Link>
      ))}{" "}
    </div>
  );
}
