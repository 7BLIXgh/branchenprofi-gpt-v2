import React from "react"

const daten = {
  region: "München",
  branche: "Restaurants",
  jahr: 2025,
  marktsituation:
    "Die Restaurantbranche in München zeigt sich 2025 zweigeteilt: Während gehobene Gastronomiekonzepte durch hohe Kaufkraft und Tourismus florieren, kämpfen kleinere Betriebe mit Personalmangel und steigenden Betriebskosten.",
  trends: [
    "Digitalisierung (z. B. QR-Menüs, Online-Buchungen)",
    "Automatisierung in Küche und Service",
    "Fokus auf Nachhaltigkeit & regionale Zutaten",
    "Premium-Konzepte mit Qualität setzen sich durch"
  ],
  herausforderungen: [
    "Fachkräftemangel im Servicebereich",
    "Hohe Fixkosten durch Mieten und Energie",
    "Wettbewerbsdruck in zentralen Lagen",
    "Nachlassende Mittagsfrequenz in Bürolagen"
  ]
}

export default function BranchenanalysePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">🍽️ Branchenanalyse {daten.branche} – {daten.region} ({daten.jahr})</h1>
          <p className="text-gray-600 text-lg">Aktuelle Marktlage, Trends & Herausforderungen</p>
        </header>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3">📊 Marktsituation</h2>
            <p>{daten.marktsituation}</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3">📈 Trends & Chancen</h2>
            <ul className="list-disc list-inside space-y-1">
              {daten.trends.map((punkt, i) => (
                <li key={i}>{punkt}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3">⚠️ Herausforderungen</h2>
            <ul className="list-disc list-inside space-y-1">
              {daten.herausforderungen.map((punkt, i) => (
                <li key={i}>{punkt}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="text-sm text-gray-500 text-center mt-12">
          Letztes Update durch Branchenprofi-GPT – {daten.jahr}
        </footer>
      </div>
    </main>
  )
}
