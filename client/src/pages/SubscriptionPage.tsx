import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Satellite, Zap, CloudLightning, Phone, ArrowLeft } from "lucide-react"

// Simulated Satellite Map Component
const SatelliteMapDemo = () => {
    const [scanning, setScanning] = useState(true)
    const [healthData, setHealthData] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setScanning(false)
            setHealthData(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative w-full h-64 bg-slate-900 rounded-xl overflow-hidden shadow-2xl border-4 border-slate-800">
            {/* Base Map Layer (Simulated) */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Health Heatmap Overlay (Appears after scan) */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${healthData ? 'opacity-70' : 'opacity-0'}`}>
                {/* Healthy Zones (Green) */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 blur-2xl rounded-full" />
                <div className="absolute bottom-10 right-10 w-40 h-20 bg-green-600 blur-2xl rounded-full" />

                {/* Stress Zones (Yellow - Water Needed) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-500 blur-xl rounded-full animate-pulse" />

                {/* Danger Zones (Red - Pest/Disease) */}
                <div className="absolute top-5 right-5 w-16 h-16 bg-red-600 blur-xl rounded-full animate-ping" />
            </div>

            {/* Scanning Animation */}
            {scanning && (
                <div className="absolute inset-0 z-20">
                    <div className="w-full h-1 bg-green-400 shadow-[0_0_20px_rgba(74,222,128,1)] animate-[scan_3s_ease-in-out_infinite]" />
                    <div className="absolute top-4 left-4 text-green-400 font-mono text-xs animate-pulse">
                        🛰️ SATELLITE LINK ACTIVE...<br />
                        SCANNING SECTOR 7G...<br />
                        ANALYZING NDVI...
                    </div>
                </div>
            )}

            {/* UI Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm flex justify-between items-center z-30">
                <div className="flex items-center gap-2">
                    <Satellite className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-white font-mono">LIVE FEED</span>
                </div>
                <div className="flex gap-2 text-[10px] text-white font-bold">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Healthy</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500" /> Stress</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Danger</span>
                </div>
            </div>
        </div>
    )
}

export default function SubscriptionPage() {
    const navigate = useNavigate()
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")

    return (
        <div className="min-h-screen bg-slate-950 text-white pb-20">
            {/* Header */}
            <div className="p-4 flex items-center gap-4 sticky top-0 bg-slate-950/80 backdrop-blur-md z-40 border-b border-white/10">
                <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-white hover:bg-white/10">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-200 to-amber-500 bg-clip-text text-transparent">
                    FasalCare Pro
                </h1>
            </div>

            <div className="p-4 max-w-md mx-auto space-y-8">

                {/* Hero Section: Satellite Demo */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <Satellite className="w-5 h-5 text-blue-400" />
                            Satellite Health Scan
                        </h2>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50">PREMIUM</Badge>
                    </div>
                    <p className="text-sm text-slate-400">See your farm's health from space. Detect pests, water stress, and disease before they spread.</p>
                    <SatelliteMapDemo />
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-slate-900 border-slate-800 text-slate-200">
                        <CardHeader className="p-4 pb-2">
                            <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                            <CardTitle className="text-sm">Instant AI</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs text-slate-400">
                            Unlimited disease scans with 2x faster processing.
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-900 border-slate-800 text-slate-200">
                        <CardHeader className="p-4 pb-2">
                            <CloudLightning className="w-8 h-8 text-blue-500 mb-2" />
                            <CardTitle className="text-sm">Weather Alerts</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs text-slate-400">
                            SMS alerts for storms, rain, and frost risk.
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-900 border-slate-800 text-slate-200">
                        <CardHeader className="p-4 pb-2">
                            <Phone className="w-8 h-8 text-green-500 mb-2" />
                            <CardTitle className="text-sm">Agri-Doctor</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs text-slate-400">
                            Direct WhatsApp chat with agricultural experts.
                        </CardContent>
                    </Card>
                    <Card className="bg-slate-900 border-slate-800 text-slate-200">
                        <CardHeader className="p-4 pb-2">
                            <Satellite className="w-8 h-8 text-purple-500 mb-2" />
                            <CardTitle className="text-sm">Health Maps</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-xs text-slate-400">
                            Weekly satellite NDVI reports of your land.
                        </CardContent>
                    </Card>
                </div>

                {/* Pricing Toggle */}
                <div className="flex justify-center">
                    <div className="bg-slate-900 p-1 rounded-full flex items-center border border-slate-800">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "monthly" ? "bg-slate-800 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === "yearly" ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
                        >
                            Yearly <span className="text-[10px] ml-1 opacity-80">-20%</span>
                        </button>
                    </div>
                </div>

                {/* Pricing Card */}
                <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/30 overflow-hidden relative">
                    <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                        MOST POPULAR
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">
                            {billingCycle === "monthly" ? "₹99" : "₹999"}
                            <span className="text-sm font-normal text-slate-400">/{billingCycle === "monthly" ? "mo" : "yr"}</span>
                        </CardTitle>
                        <CardDescription className="text-center text-slate-400">
                            Everything you need to grow better.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            {["Unlimited Crop Diagnosis", "Satellite Health Maps", "Agri-Expert Support", "Ad-Free Experience", "Offline Mode + Sync"].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-green-500" />
                                    </div>
                                    <span className="text-sm text-slate-300">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-6 text-lg shadow-lg hover:shadow-amber-500/20 transition-all">
                            Start 7-Day Free Trial
                        </Button>
                    </CardFooter>
                </Card>

                <p className="text-center text-xs text-slate-500">
                    Cancel anytime. No credit card required for trial.
                </p>

            </div>
        </div>
    )
}
