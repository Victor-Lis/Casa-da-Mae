import Link from "next/link";
import { LuUserCircle } from "react-icons/lu";

export default function ButtonProfile() {
  return (
    <Link
      href={"/profile"}
      className="flex justify-center items-center bg-green-700 text-white py-2 px-4 text-3xl rounded hover:scale-105 duration-150"
    >
      <div className="p-0.5 mr-1">
        <LuUserCircle size={35} color="#fff" />
      </div>
      <h2>Perfil</h2>
    </Link>
  );
}
