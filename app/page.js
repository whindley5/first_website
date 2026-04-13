"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not reach Python API"));
  }, []);

  return (
    <main>
      <h1>Welcome to First Website 👋</h1>
      <p>
        A starter project built with <strong>Next.js</strong> (frontend) and{" "}
        <strong>FastAPI</strong> (Python backend), deployed on{" "}
        <strong>Vercel</strong>.
      </p>

      <div className="card">
        <h2>Python API Response</h2>
        <pre>{message}</pre>
      </div>

      <div className="links">
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          Next.js Docs →
        </a>
        <a href="https://fastapi.tiangolo.com" target="_blank" rel="noreferrer">
          FastAPI Docs →
        </a>
        <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">
          Vercel Docs →
        </a>
      </div>
    </main>
  );
}
