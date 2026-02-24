import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, TrendingUp, Settings } from "lucide-react"

// Types
type Language = "en" | "gu" | "hi";

const text = {
  en: {
    title: "FasalCare",
    subtitle: "Your AI Farming Assistant",
    cropDiagnosis: "Diagnose Crop Diseases",
    cropDesc: "Take a photo to identify plant diseases",
    marketPrices: "Check Market Prices",
    marketDesc: "Get real-time crop prices",
    govSchemes: "Government Schemes",
    schemesDesc: "Find subsidies and benefits",
    voiceAssistant: "Voice Assistant",
    voiceDesc: "Ask me anything about farming",
    offline: "Offline Mode",
    online: "Online",
  },
  gu: {
    title: "ફસલ કેર",
    subtitle: "તમારો AI ખેડૂત મિત્ર",
    cropDiagnosis: "પાક રોગ નિદાન",
    cropDesc: "છોડના રોગો ઓળખવા માટે ફોટો લો",
    marketPrices: "બજાર ભાવ તપાસો",
    marketDesc: "પાકના રીયલ-ટાઇમ ભાવ મેળવો",
    govSchemes: "સરકારી યોજનાઓ",
    schemesDesc: "સબસિડી અને લાભો શોધો",
    voiceAssistant: "વોઇસ આસિસ્ટન્ટ",
    voiceDesc: "ખેતી વિશે કંઈ પણ પૂછો",
    offline: "ઓફલાઇન મોડ",
    online: "ઓનલાઇન",
  },
  hi: {
    title: "फसल केयर",
    subtitle: "आपका एआई खेती सहायक",
    cropDiagnosis: "फसल रोग निदान",
    cropDesc: "पौधों के रोगों की पहचान के लिए फोटो लें",
    marketPrices: "बाजार भाव देखें",
    marketDesc: "फसलों के रियल-टाइम भाव प्राप्त करें",
    govSchemes: "सरकारी योजनाएं",
    schemesDesc: "सब्सिडी और लाभ खोजें",
    voiceAssistant: "वॉयस असिस्टेंट",
    voiceDesc: "खेती के बारे में कुछ भी पूछें",
    offline: "ऑफलाइन मोड",
    online: "ऑनलाइन",
  }
}

function HomePage() {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === "en") return "hi";
      if (prev === "hi") return "gu";
      return "en";
    })
  }

  const getLangLabel = () => {
    if (language === "en") return "हिंदी";
    if (language === "hi") return "ગુજરાતી";
    return "English";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <h1 className="text-xl font-bold">🧑‍🌾 {text[language].title}</h1>
            <p className="text-green-100 text-sm">{text[language].subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Subscription Icon (Replacing Wifi) */}
            <Link to="/subscription">
              <Button variant="ghost" size="icon" className="text-yellow-300 hover:text-yellow-100 hover:bg-white/10">
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  <span className="text-xl">👑</span>
                </div>
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:bg-green-700 font-bold border border-white/20"
            >
              {getLangLabel()}
            </Button>
            <Link to="/settings">
              <Button variant="ghost" size="icon" className="text-white hover:bg-green-700">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 max-w-md mx-auto space-y-4 pb-20">
        {/* HERO: Crop Diagnosis (Replaces Voice) */}
        <Card className="bg-gradient-to-r from-green-600 to-emerald-700 text-white border-0 shadow-lg overflow-hidden relative">
          {/* Decorative Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full -ml-12 -mb-12 blur-xl" />

          <CardContent className="p-6 text-center relative z-10">
            <div className="mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner border border-white/30 backdrop-blur-sm">
                <span className="text-4xl">📷</span>
              </div>
              <h2 className="text-xl font-bold mb-1">{text[language].cropDiagnosis}</h2>
              <p className="text-green-100 text-sm mb-4 opacity-90">{text[language].cropDesc}</p>
            </div>
            <Link to="/diagnosis">
              <Button className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform w-full text-md">
                {language === "en" ? "Scan Now" : (language === "hi" ? "अभी स्कैन करें" : "હવે સ્કેન કરો")} 📸
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Market Prices */}
          <Link to="/market" className="block col-span-1">
            <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-300 h-full">
              <CardHeader className="p-4">
                <CardTitle className="flex flex-col items-center text-center gap-2 text-green-700">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">💰</div>
                  <div>
                    <div className="font-semibold text-sm">{text[language].marketPrices}</div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* Weather */}
          <Link to="/weather" className="block col-span-1">
            <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-300 h-full">
              <CardHeader className="p-4">
                <CardTitle className="flex flex-col items-center text-center gap-2 text-green-700">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">🌦️</div>
                  <div>
                    <div className="font-semibold text-sm">{language === "en" ? "Weather" : (language === "hi" ? "मौसम" : "હવામાન")}</div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* Schemes */}
          <Link to="/schemes" className="block col-span-1">
            <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-300 h-full">
              <CardHeader className="p-4">
                <CardTitle className="flex flex-col items-center text-center gap-2 text-green-700">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">🧾</div>
                  <div>
                    <div className="font-semibold text-sm">{language === "en" ? "Schemes" : (language === "hi" ? "योजनाएं" : "યોજનાઓ")}</div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* Forum */}
          <Link to="/forum" className="block col-span-1">
            <Card className="hover:shadow-lg transition-shadow border-green-200 hover:border-green-300 h-full">
              <CardHeader className="p-4">
                <CardTitle className="flex flex-col items-center text-center gap-2 text-green-700">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl">👥</div>
                  <div>
                    <div className="font-semibold text-sm">{language === "en" ? "Forum" : (language === "hi" ? "मंच" : "ચર્ચા")}</div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Teasers List */}
        <div className="space-y-3">
          {/* Drone Farming (Teaser) */}
          <div className="block opacity-80 grayscale hover:grayscale-0 transition-all">
            <Card className="border-blue-200 bg-blue-50/50">
              <div className="p-3 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">🚁</div>
                <div>
                  <div className="font-semibold flex items-center gap-2 text-blue-900">
                    {language === "en" ? "Drone Services" : (language === "hi" ? "ड्रोन सेवाएं" : "ડ્રોન સેવા")}
                    <Badge variant="secondary" className="text-[10px] bg-blue-200 text-blue-800">SOON</Badge>
                  </div>
                  <div className="text-xs text-blue-700">Automated Spraying & Monitoring</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Subscription (Teaser) */}
          <Link to="/subscription" className="block">
            <Card className="border-purple-200 hover:shadow-lg transition-all bg-gradient-to-r from-purple-50 to-pink-50 cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-purple-800">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">👑</div>
                  <div>
                    <div className="font-semibold">{language === "en" ? "FasalCare Pro" : (language === "hi" ? "फसल केयर प्रो" : "ફસલ કેર પ્રો")}</div>
                    <div className="text-sm text-gray-600 font-normal">{language === "en" ? "Get Premium Features" : (language === "hi" ? "प्रीमium સુવિધાઓ મેળવો" : "પ્રીમિયમ સુવિધાઓ મેળવો")}</div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* FasalCare Shop (Teaser) */}
          <Link to="/shop" className="block">
            <Card className="border-green-200 hover:shadow-lg transition-all bg-gradient-to-r from-emerald-50 to-teal-50 cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-emerald-800">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-2xl">🛒</div>
                  <div>
                    <div className="font-semibold">{language === "en" ? "Agri Store" : (language === "hi" ? "कृषि स्टोर" : "કૃષિ સ્ટોર")}</div>
                    <div className="text-sm text-emerald-600 font-normal">{language === "en" ? "Buy seeds, fertilizers & more" : (language === "hi" ? "बीज, उर्वरक और बहुत कुछ खरीदें" : "બિયારણ, ખાતર અને વધુ ખરીદો")}</div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>


        {/* Floating Voice Assistant Button (FAB) */}
        <Link to="/voice">
          <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
            <Button className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 shadow-xl shadow-green-300 border-4 border-white flex items-center justify-center hover:scale-110 transition-transform">
              <Mic className="w-8 h-8 text-white" />
            </Button>
            {/* Tooltip/Label */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
              Voice Assistant
            </div>
          </div>
        </Link>

        {/* Quick Stats */}
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="font-semibold text-amber-700">🌾 {language === "en" ? "Today" : (language === "hi" ? "आज" : "આજે")}</div>
                <div className="text-amber-600">3 {language === "en" ? "Queries" : (language === "hi" ? "प्रश्न" : "પ્રશ્નો")}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-amber-700">📈 {language === "en" ? "Trend" : "ट्रेंड"}</div>
                <div className="text-amber-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12%
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-amber-700">🎯 {language === "en" ? "Accuracy" : (language === "hi" ? "सटीकता" : "ચોકસાઈ")}</div>
                <div className="text-amber-600">94%</div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

import DiagnosisPage from "./pages/DiagnosisPage";
import MarketPage from "./pages/MarketPage";
import SchemesPage from "./pages/SchemesPage";
import WeatherPage from "./pages/WeatherPage";
import ForumPage from "./pages/ForumPage";

import SettingsPage from "./pages/SettingsPage";
import VoicePage from "./pages/VoicePage";

import SubscriptionPage from "./pages/SubscriptionPage";
import ShopPage from "./pages/ShopPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen pb-4 relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>

        {/* Global Footer */}
        <div className="text-center p-2 text-[10px] text-green-600 opacity-60 mt-4 font-medium">
          Developed by DeepPro
        </div>
      </div>
    </Router>
  )
}
