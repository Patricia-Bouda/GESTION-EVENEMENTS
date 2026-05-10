import Link from "next/link";
import { evenements } from "@/database/evenements";
import RegisterForm from "@/components/RegisterForm";

export default async function EvenementDetails({
  params,
}) {
    const resolvedParams = await params;
  const evenement = evenements.find(
    (e) => e.id == resolvedParams.id
  );

  if (!evenement) {
    return (
      <p className="p-6">
        Événement introuvable
      </p>
    );
  }

  const remaining =
    evenement.capacity - evenement.registered;

  return (
    <main className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <Link
  href="/"
  className="inline-block mb-6 text-blue-600"
>
  ← Retour aux événements
</Link>
        <h1 className="text-4xl font-bold mb-4">
          {evenement.title}
        </h1>

        <p className="mb-4">
          {evenement.description}
        </p>

        <p className="mb-2">
          {evenement.location}
        </p>

        <p className="mb-2">
          {evenement.date}
        </p>

        <p className="font-bold mb-6">
          {remaining} places restantes
        </p>

        <RegisterForm evenement={evenement} />
      </div>
    </main>
  );
}