import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sparkles, MapPin, TrendingUp, Leaf } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">🍽️ Branchenanalyse: Restaurants in München (2025)</h1>
        <p className="text-gray-600 mb-6">Diese Analyse zeigt die aktuelle Situation, Herausforderungen und Trends in der Münchner Gastronomie.</p>

        <Card className="mb-6 shadow-md border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-500" />
              <span className="text-lg font-medium text-gray-700">Region: <strong>München</strong></span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="text-yellow-500" />
              <span className="text-lg font-medium text-gray-700">Branche: <strong>Restaurants</strong></span>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-6" />

        <Card className="mb-6 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📊 Marktsituation</h2>
            <p className="text-gray-700">Die Restaurantbranche in München zeigt sich 2025 zweigeteilt: Während gehobene Gastronomiekonzepte durch hohe Kaufkraft und Tourismus florieren, kämpfen kleinere Betriebe mit Personalmangel und steigenden Betriebskosten.</p>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📈 Trends & Chancen</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Digitalisierung (z. B. QR-Menüs, Online-Buchungen)</li>
              <li>Automatisierung in Küche und Service</li>
              <li><span className="inline-flex items-center"><Leaf className="w-4 h-4 mr-1" /> Fokus auf Nachhaltigkeit & regionale Zutaten</span></li>
              <li>Premium-Konzepte mit Qualität setzen sich durch</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">⚠️ Herausforderungen</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Fachkräftemangel im Servicebereich</li>
              <li>Hohe Fixkosten durch Mieten und Energie</li>
              <li>Wettbewerbsdruck in zentralen Lagen</li>
              <li>Nachlassende Mittagsfrequenz in Bürolagen</li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-sm text-gray-500 text-center mt-12">Letztes Update durch Branchenprofi-GPT – 2025</p>
      </div>
    </div>
  )
}
