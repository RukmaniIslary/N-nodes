"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Registration failed");
        return;
      }

      alert("Account created successfully");

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  }

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      "
    >
      <div
        className="
        glass
        p-10
        rounded-3xl
        w-[450px]
        "
      >
        <h1
          className="
          text-4xl
          font-black
          mb-8
          "
        >
          Register
        </h1>

        <input
          placeholder="Name"
          className="glass p-4 w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="glass p-4 w-full mt-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="glass p-4 w-full mt-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          className="
          bg-red-500
          px-6
          py-3
          rounded-xl
          mt-6
          w-full
          "
        >
          Register
        </button>
      </div>
    </div>
  );
}