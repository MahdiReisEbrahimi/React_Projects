"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ text, href }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${
        path.startsWith(href) ? "bg-orange-200" : "bg-orange-400"
      } p-2 ml-2 mr-2  rounded-lg text-black font-bold hover:bg-orange-300`}
    >
      {text}
    </Link>
  );
}
