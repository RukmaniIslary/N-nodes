"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  async function submit() {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response =
        await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

      const data =
        await response.json();

      if (!response.ok) {
        setError(
          data.error ||
            "Registration failed"
        );
        setLoading(false);
        return;
      }

      setSuccess(
        "Account created successfully. Redirecting..."
      );

      setTimeout(() => {
        router.push("/login");
      }, 1500);

    } catch (error) {
      console.error(error);

      setError(
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
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
        <div
          className="
          text-center
          mb-8
          "
        >
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
            Join the premium sneaker universe
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

        {success && (
          <div
            className="
            bg-green-500/10
            border
            border-green-500/30
            text-green-400
            p-3
            rounded-xl
            mb-4
            "
          >
            {success}
          </div>
        )}

        <div className="space-y-4">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
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
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </div>

        <div
          className="
          text-center
          mt-6
          text-gray-400
          "
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className="
            text-red-400
            hover:text-red-300
            "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}