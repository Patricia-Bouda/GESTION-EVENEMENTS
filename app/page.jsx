"use client";

import { useEffect, useState } from "react";
import { evenements } from "../database/evenements";
import EvenementCard from "../components/EvenementCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const filteredEvenements =
    evenements.filter((evenement) =>
      evenement.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  if (loading) {
    return (
      <p className="p-6">
        Chargement...
      </p>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
  Liste des événements
</h1>

        <input
          type="text"
          placeholder="Rechercher un événement"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-3 rounded-lg border mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvenements.map((evenement) => (
            <EvenementCard
              key={evenement.id}
              evenement={evenement}
            />
          ))}
        </div>
      </div>
    </main>
  );
}