"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function ButtonSignIn() {
  async function handleLogin() {
    await signIn();
  }
  return (
    <button
      onClick={handleLogin}
      className="flex justify-center items-center bg-green-700 text-white py-2 px-4 text-3xl rounded hover:scale-105 duration-150"
    >
      <div className="bg-white p-0.5 rounded-full mr-1">
        <FcGoogle size={30} />
      </div>
      <h2>
        Login
      </h2>
    </button>
  );
}
