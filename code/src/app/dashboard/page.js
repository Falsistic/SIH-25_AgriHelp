"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Wind, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Leaf
} from "lucide-react";

export default function Dashboard() {
  const language ="en";
  const getText = (textObj) => {
    return textObj[language] || textObj.en;
  };

  // Mock data
  const weatherData = [
    { day: "Mon", temp: 24, humidity: 65, rainfall: 0 },
    { day: "Tue", temp: 26, humidity: 58, rainfall: 2 },
    { day: "Wed", temp: 22, humidity: 72, rainfall: 8 },
    { day: "Thu", temp: 25, humidity: 61, rainfall: 0 },
    { day: "Fri", temp: 27, humidity: 55, rainfall: 0 },
    { day: "Sat", temp: 29, humidity: 52, rainfall: 0 },
    { day: "Sun", temp: 28, humidity: 58, rainfall: 1 }
  ];

  const yieldPrediction = [
    { month: "Jan", predicted: 85, actual: 82 },
    { month: "Feb", predicted: 78, actual: 80 },
    { month: "Mar", predicted: 92, actual: 90 },
    { month: "Apr", predicted: 88, actual: 85 },
    { month: "May", predicted: 95, actual: 0 },
    { month: "Jun", predicted: 102, actual: 0 }
  ];

  const crops = [
    {
      name: { en: "Wheat", es: "Trigo", hi: "गेहूं", fr: "Blé" },
      area: "25 hectares",
      health: 85,
      expectedYield: "4.2 tons/hectare",
      status: "healthy",
      lastUpdated: "2 hours ago"
    },
    {
      name: { en: "Corn", es: "Maíz", hi: "मक्का", fr: "Maïs" },
      area: "18 hectares", 
      health: 72,
      expectedYield: "6.8 tons/hectare",
      status: "warning",
      lastUpdated: "4 hours ago"
    },
    {
      name: { en: "Rice", es: "Arroz", hi: "चावल", fr: "Riz" },
      area: "30 hectares",
      health: 91,
      expectedYield: "5.5 tons/hectare", 
      status: "healthy",
      lastUpdated: "1 hour ago"
    }
  ];

  const recommendations = [
    {
      type: "irrigation",
      priority: "high",
      title: { en: "Irrigation Required", es: "Riego Requerido", hi: "सिंचाई आवश्यक", fr: "Irrigation Requise" },
      description: { en: "Corn field moisture level is below optimal", es: "El nivel de humedad del campo de maíz está por debajo del óptimo", hi: "मक्का के खेत की नमी का स्तर इष्टतम से कम है", fr: "Le niveau d'humidité du champ de maïs est en dessous de l'optimal" },
      action: { en: "Water in 2 hours", es: "Regar en 2 horas", hi: "2 घंटे में पानी दें", fr: "Arroser dans 2 heures" }
    },
    {
      type: "fertilizer", 
      priority: "medium",
      title: { en: "Fertilizer Application", es: "Aplicación de Fertilizante", hi: "उर्वरक अनुप्रयोग", fr: "Application d'Engrais" },
      description: { en: "Wheat field nitrogen levels are decreasing", es: "Los niveles de nitrógeno del campo de trigo están disminuyendo", hi: "गेहूं के खेत में नाइट्रोजन का स्तर घट रहा है", fr: "Les niveaux d'azote du champ de blé diminuent" },
      action: { en: "Apply in 3 days", es: "Aplicar en 3 días", hi: "3 दिन में लगाएं", fr: "Appliquer dans 3 jours" }
    },
    {
      type: "pest",
      priority: "low", 
      title: { en: "Pest Monitoring", es: "Monitoreo de Plagas", hi: "कीट निगरानी", fr: "Surveillance des Ravageurs" },
      description: { en: "Aphid population detected in rice field", es: "Población de áfidos detectada en el campo de arroz", hi: "चावल के खेत में एफिड आबादी का पता चला", fr: "Population de pucerons détectée dans le champ de riz" },
      action: { en: "Monitor closely", es: "Monitorear de cerca", hi: "बारीकी से निगरानी करें", fr: "Surveiller étroitement" }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy": return "bg-green-100 text-green-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "medium": return <Clock className="w-4 h-4 text-yellow-500" />;
      case "low": return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getText({
            en: "Farm Dashboard",
            es: "Panel de la Granja",
            hi: "फार्म डैशबोर्ड",
            fr: "Tableau de Bord de la Ferme"
          })}
        </h1>
        <p className="text-gray-600">
          {getText({
            en: "Monitor your crops, weather conditions, and get AI-powered recommendations",
            es: "Monitorea tus cultivos, condiciones climáticas y obtén recomendaciones impulsadas por IA",
            hi: "अपनी फसलों, मौसम की स्थिति की निगरानी करें और AI-संचालित सिफारिशें प्राप्त करें",
            fr: "Surveillez vos cultures, les conditions météorologiques et obtenez des recommandations alimentées par l'IA"
          })}
        </p>
      </div>

      {/* Weather Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{getText({ en: "Temperature", es: "Temperatura", hi: "तापमान", fr: "Température" })}</p>
                <p className="text-2xl font-bold">25°C</p>
              </div>
              <Thermometer className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{getText({ en: "Humidity", es: "Humedad", hi: "आर्द्रता", fr: "Humidité" })}</p>
                <p className="text-2xl font-bold">62%</p>
              </div>
              <Droplets className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{getText({ en: "UV Index", es: "Índice UV", hi: "यूवी इंडेक्स", fr: "Indice UV" })}</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <Sun className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{getText({ en: "Wind Speed", es: "Velocidad del Viento", hi: "हवा की गति", fr: "Vitesse du Vent" })}</p>
                <p className="text-2xl font-bold">12 km/h</p>
              </div>
              <Wind className="w-8 h-8 text-gray-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Crop Status */}
          <Card>
            <CardHeader>
              <CardTitle>{getText({ en: "Crop Status", es: "Estado de los Cultivos", hi: "फसल की स्थिति", fr: "État des Cultures" })}</CardTitle>
              <CardDescription>{getText({ en: "Real-time health monitoring of your crops", es: "Monitoreo de salud en tiempo real de tus cultivos", hi: "आपकी फसलों की वास्तविक समय स्वास्थ्य निगरानी", fr: "Surveillance de la santé en temps réel de vos cultures" })}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crops.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{getText(crop.name)}</h4>
                        <p className="text-sm text-gray-600">{crop.area}</p>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge className={getStatusColor(crop.status)}>
                        {crop.health}% {getText({ en: "Health", es: "Salud", hi: "स्वास्थ्य", fr: "Santé" })}
                      </Badge>
                      <p className="text-xs text-gray-500">{crop.lastUpdated}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Yield Prediction Chart */}
          <Card>
            <CardHeader>
              <CardTitle>{getText({ en: "Yield Predictions", es: "Predicciones de Rendimiento", hi: "उत्पादन पूर्वानुमान", fr: "Prédictions de Rendement" })}</CardTitle>
              <CardDescription>{getText({ en: "AI-powered crop yield forecasts vs actual results", es: "Pronósticos de rendimiento de cultivos impulsados por IA vs resultados reales", hi: "AI-संचालित फसल उत्पादन पूर्वानुमान बनाम वास्तविक परिणाम", fr: "Prévisions de rendement des cultures alimentées par l'IA par rapport aux résultats réels" })}</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ predicted: { color: "#16a34a" }, actual: { color: "#059669" } }} className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yieldPrediction}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="predicted" stroke="#16a34a" strokeWidth={2} />
                    <Line type="monotone" dataKey="actual" stroke="#059669" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>{getText({ en: "Today's Recommendations", es: "Recomendaciones de Hoy", hi: "आज की सिफारिशें", fr: "Recommandations d'Aujourd'hui" })}</CardTitle>
              <CardDescription>{getText({ en: "AI-generated actionable insights", es: "Perspectivas accionables generadas por IA", hi: "AI-जनित कार्यान्वित अंतर्दृष्टि", fr: "Informations exploitables générées par l'IA" })}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      {getPriorityIcon(rec.priority)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{getText(rec.title)}</h4>
                        <p className="text-xs text-gray-600 mt-1">{getText(rec.description)}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          {getText(rec.action)}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weather Forecast */}
          <Card>
            <CardHeader>
              <CardTitle>{getText({ en: "7-Day Weather", es: "Clima de 7 Días", hi: "7 दिन का मौसम", fr: "Météo 7 Jours" })}</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ temp: { color: "#f59e0b" }, humidity: { color: "#3b82f6" } }} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="temp" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
