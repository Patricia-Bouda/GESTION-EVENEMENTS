"use client";

import { useState } from "react";

export default function CreateEvenement() {
  const [message, setMessage] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Événement créé avec succès"
    );
  };

  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          Créer un événement
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Titre"
            className="w-full border p-3 rounded text-black"
          />

          <textarea
            placeholder="Description"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="date"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="text"
            placeholder="Lieu"
            className="w-full border p-3 rounded text-black"
          />

          <input
            type="number"
            placeholder="Capacité"
            className="w-full border p-3 rounded text-black"
          />

          <button className="bg-black text-white px-5 py-3 rounded">
            Créer
          </button>

          {message && (
            <p className="font-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}