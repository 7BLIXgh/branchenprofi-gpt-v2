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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Branchenprofi-GPT</h1>
          <span className="text-sm text-gray-500">Analysemodul 2025</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <header className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-2">🍽️ Branchenanalyse: {daten.branche}</h2>
          <p className="text-gray-600 text-lg">{daten.region}, {daten.jahr} – Markt, Trends, Herausforderungen</p>
        </header>

        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-blue-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">📊 Marktsituation</h3>
            <p className="text-gray-700 leading-relaxed">{daten.marktsituation}</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-green-200">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">📈 Trends & Chancen</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {daten.trends.map((punkt, i) => (
                <li key={i}>{punkt}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-red-200">
            <h3 className="text-2xl font-semibold text-red-800 mb-3">⚠️ Herausforderungen</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {daten.herausforderungen.map((punkt, i) => (
                <li key={i}>{punkt}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="text-sm text-gray-500 text-center mt-16">
          Letztes Update durch Branchenprofi-GPT – {daten.jahr}
        </footer>
      </div>
    </main>
  )
}
