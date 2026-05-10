import Link from "next/link";

export default function EvenementCard({
  evenement,
}) {
  const remaining =
    evenement.capacity - evenement.registered;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
      <h2 className="text-gray-800 font-bold">
        {evenement.title}
      </h2>

      <p className="text-gray-600 mb-1">
        {evenement.location}
      </p>

      <p className="text-gray-600 mb-3">
        {evenement.date}
      </p>

      <p className="text-green-600 font-semibold mb-3">
        {remaining} places restantes
      </p>

      {remaining === 0 && (
        <p className="text-red-500 font-bold mb-3">
          Complet
        </p>
      )}

      <Link
        href={`/evenements/${evenement.id}`}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Voir détails
      </Link>
    </div>
  );
}