"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function submit() {
    setLoading(true);
    setError("");

    const result = await signIn(
      "credentials",
      {
        email,
        password,
        redirect: false,
      }
    );

    if (result?.error) {
      setError(
        "Invalid email or password"
      );
      setLoading(false);
      return;
    }

    window.location.href =
      "/dashboard";
  }

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      bg-black
      "
    >
      <div
        className="
        w-full
        max-w-md
        glass
        rounded-3xl
        p-10
        border
        border-white/10
        "
      >
        <div className="text-center mb-8">
          <h1
            className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-red-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            N-Nodes
          </h1>

          <p
            className="
            text-gray-400
            mt-3
            "
          >
            Welcome back
          </p>
        </div>

        {error && (
          <div
            className="
            bg-red-500/10
            border
            border-red-500/30
            text-red-400
            p-3
            rounded-xl
            mb-4
            "
          >
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
            glass
            p-4
            w-full
            rounded-xl
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
            glass
            p-4
            w-full
            rounded-xl
            "
          />

          <button
            onClick={submit}
            disabled={loading}
            className="
            w-full
            bg-red-500
            hover:bg-red-600
            transition
            py-4
            rounded-xl
            font-bold
            disabled:opacity-50
            "
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>
        </div>

        <div
          className="
          text-center
          mt-6
          text-gray-400
          "
        >
          Don't have an account?{" "}
          <Link
            href="/register"
            className="
            text-red-400
            hover:text-red-300
            "
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}