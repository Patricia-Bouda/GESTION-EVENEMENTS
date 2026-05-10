"use client";

import { useState } from "react";

export default function RegisterForm({ evenement }) {
  const [message, setMessage] = useState("");

  const remaining =
    evenement.capacity - evenement.registered;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (remaining === 0) {
      setMessage(
        "Cet événement est complet"
      );

      return;
    }

    setMessage(
      "Inscription réussie"
    );
  };

  return (
    <form

      onSubmit={handleSubmit}

      className="space-y-4"

    >

      <input

        type="text"

        placeholder="Prénom"

        className="w-full border p-3 rounded"

      />

      <input

        type="text"

        placeholder="Nom"

        className="w-full border p-3 rounded"

      />

      <input

        type="email"

        placeholder="Email"

        className="w-full border p-3 rounded"

      />

      <button className="bg-black text-white px-5 py-3 rounded">

        S'inscrire

      </button>

      {message && (

        <p className="font-semibold">

          {message}

        </p>

      )}

    </form>
  );
}