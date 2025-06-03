import React from "react"

export default function BranchenanalyseMuenchen() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">🍽️ Branchenanalyse: Restaurants in München (2025)</h1>
        <p className="text-gray-600 mb-8">
          Diese Analyse zeigt die aktuelle Situation, Herausforderungen und Trends in der Münchner Gastronomie.
        </p>

        {/* Header Info */}
        <div className="bg-white rounded-xl border border-gray-200 shadow p-6 mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-blue-500 text-xl">📍</span>
            <span className="text-lg font-medium">Region: <strong>München</strong></span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-yellow-500 text-xl">✨</span>
            <span className="text-lg font-medium">Branche: <strong>Restaurants</strong></span>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-8 border-gray-300" />

        {/* Marktsituation */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">📊 Marktsituation</h2>
          <p>
            Die Restaurantbranche in München zeigt sich 2025 zweigeteilt: Während gehobene Gastronomiekonzepte durch hohe
            Kaufkraft und Tourismus florieren, kämpfen kleinere Betriebe mit Personalmangel und steigenden Betriebskosten.
          </p>
        </div>

        {/* Trends */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">📈 Trends & Chancen</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Digitalisierung (z. B. QR-Menüs, Online-Buchungen)</li>
            <li>Automatisierung in Küche und Service</li>
            <li>Fokus auf Nachhaltigkeit & regionale Zutaten</li>
            <li>Premium-Konzepte mit Qualität setzen sich durch</li>
          </ul>
        </div>

        {/* Herausforderungen */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">⚠️ Herausforderungen</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fachkräftemangel im Servicebereich</li>
            <li>Hohe Fixkosten durch Mieten und Energie</li>
            <li>Wettbewerbsdruck in zentralen Lagen</li>
            <li>Nachlassende Mittagsfrequenz in Bürolagen</li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          Letztes Update durch Branchenprofi-GPT – 2025
        </p>
      </div>
    </div>
  )
}
