"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  async function submit() {

    await signIn(
      "credentials",
      {
        email,
        password,
        redirect: true,
        callbackUrl: "/dashboard"
      }
    );

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
          Login
        </h1>

        <input
          placeholder="Email"
          className="glass p-4 w-full"
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="
          glass
          p-4
          w-full
          mt-4
          "
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
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
          Login
        </button>

      </div>

    </div>

  );

}