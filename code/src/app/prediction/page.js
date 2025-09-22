"use client"; // required for useState/useEffect

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Calendar,
  MapPin,
  Thermometer,
  Droplets,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function Predictions({ language = "en" }) {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [fieldSize, setFieldSize] = useState("");
  const [location, setLocation] = useState("");
  const [cropVariety, setCropVariety] = useState("");
  const [sowingDate, setSowingDate] = useState("");
  const [soilType, setSoilType] = useState("");
  const [showResults, setShowResults] = useState(false);

  const getText = (textObj) => textObj[language] || textObj.en;

  // Dummy crop options
  const crops = [
    {
      value: "wheat",
      label: { en: "Wheat", es: "Trigo", hi: "गेहूं", fr: "Blé" },
    },
    {
      value: "corn",
      label: { en: "Corn", es: "Maíz", hi: "मक्का", fr: "Maïs" },
    },
    {
      value: "rice",
      label: { en: "Rice", es: "Arroz", hi: "चावल", fr: "Riz" },
    },
    {
      value: "soybeans",
      label: { en: "Soybeans", es: "Soja", hi: "सोयाबीन", fr: "Soja" },
    },
    {
      value: "tomatoes",
      label: { en: "Tomatoes", es: "Tomates", hi: "टमाटर", fr: "Tomates" },
    },
  ];

  // Dummy yield forecast
  const yieldForecast = [
    { month: "Jan", predicted: 85, lower: 78, upper: 92 },
    { month: "Feb", predicted: 78, lower: 72, upper: 84 },
    { month: "Mar", predicted: 92, lower: 87, upper: 97 },
    { month: "Apr", predicted: 88, lower: 82, upper: 94 },
    { month: "May", predicted: 95, lower: 89, upper: 101 },
    { month: "Jun", predicted: 102, lower: 94, upper: 110 },
  ];

  // Dummy risk analysis
  const riskFactors = [
    { name: "Weather", value: 15, color: "#3b82f6" },
    { name: "Pests", value: 8, color: "#ef4444" },
    { name: "Disease", value: 12, color: "#f59e0b" },
    { name: "Soil", value: 5, color: "#10b981" },
  ];

  // Dummy environment factors
  const envFactors = {
    temperature: "26°C",
    soilMoisture: "68%",
    growingConditions: "Optimal",
    diseaseRisk: "Low",
  };

  const handlePrediction = () => {
    if (
      selectedCrop &&
      fieldSize &&
      location &&
      cropVariety &&
      sowingDate &&
      soilType
    ) {
      setShowResults(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getText({
            en: "Crop Yield Predictions",
            es: "Predicciones de Rendimiento de Cultivos",
            hi: "फसल उत्पादन पूर्वानुमान",
            fr: "Prédictions de Rendement des Cultures",
          })}
        </h1>
        <p className="text-gray-600">
          {getText({
            en: "Get AI-powered predictions for your crops based on historical data, weather patterns, and soil conditions",
            es: "Obtén predicciones impulsadas por IA para tus cultivos basadas en datos históricos, patrones climáticos y condiciones del suelo",
            hi: "ऐतिहासिक डेटा, मौसम पैटर्न और मिट्टी की स्थितियों के आधार पर अपनी फसलों के लिए AI-संचालित भविष्यवाणियां प्राप्त करें",
            fr: "Obtenez des prédictions alimentées par l'IA pour vos cultures basées sur les données historiques, les modèles météorologiques et les conditions du sol",
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>
                {getText({
                  en: "Prediction Parameters",
                  es: "Parámetros de Predicción",
                  hi: "पूर्वानुमान पैरामीटर",
                  fr: "Paramètres de Prédiction",
                })}
              </CardTitle>
              <CardDescription>
                {getText({
                  en: "Configure your crop and field details",
                  es: "Configura los detalles de tu cultivo y campo",
                  hi: "अपनी फसल और खेत की जानकारी कॉन्फ़िगर करें",
                  fr: "Configurez les détails de votre culture et de votre champ",
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Crop Type */}
              <div className="space-y-2">
                <Label>{getText({ en: "Crop Type" })}</Label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {crops.map((crop) => (
                      <SelectItem key={crop.value} value={crop.value}>
                        {getText(crop.label)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Farm Size */}
              <div className="space-y-2">
                <Label>{getText({ en: "Field Size (hectares)" })}</Label>
                <Input
                  type="number"
                  placeholder="25"
                  value={fieldSize}
                  onChange={(e) => setFieldSize(e.target.value)}
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label>{getText({ en: "Location" })}</Label>
                <Input
                  type="text"
                  placeholder="Punjab, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              {/* Crop Variety */}
              <div className="space-y-2">
                <Label>{getText({ en: "Crop Variety" })}</Label>
                <Input
                  type="text"
                  placeholder="e.g., Hybrid Wheat"
                  value={cropVariety}
                  onChange={(e) => setCropVariety(e.target.value)}
                />
              </div>

              {/* Sowing Date / Month */}
              <div className="space-y-2">
                <Label>{getText({ en: "Sowing Date / Month" })}</Label>
                <Input
                  type="month"
                  value={sowingDate}
                  onChange={(e) => setSowingDate(e.target.value)}
                />
              </div>

              {/* Soil Type */}
              <div className="space-y-2">
                <Label>{getText({ en: "Soil Type" })}</Label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="silty">Silty</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full"
                onClick={handlePrediction}
                disabled={
                  !selectedCrop ||
                  !fieldSize ||
                  !location ||
                  !cropVariety ||
                  !sowingDate ||
                  !soilType
                }
              >
                {getText({
                  en: "Generate Prediction",
                  es: "Generar Predicción",
                  hi: "पूर्वानुमान उत्पन्न करें",
                  fr: "Générer une Prédiction",
                })}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          {showResults ? (
            <div className="space-y-6">
              {/* Parameters Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Prediction Parameters Summary</CardTitle>
                  <CardDescription>Your entered details</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><strong>Location:</strong> {location}</div>
                  <div><strong>Farm Size:</strong> {fieldSize} hectares</div>
                  <div><strong>Crop Type:</strong> {getText(crops.find(c => c.value === selectedCrop)?.label || {})}</div>
                  <div><strong>Crop Variety:</strong> {cropVariety}</div>
                  <div><strong>Sowing Date:</strong> {sowingDate}</div>
                  <div><strong>Soil Type:</strong> {soilType}</div>
                </CardContent>
              </Card>

              {/* Yield Prediction Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <h2 className="text-green-600 text-2xl font-bold">
                      4.2 tons/hectare
                    </h2>
                    <p className="text-gray-500">Predicted Yield</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <h2 className="text-blue-600 text-2xl font-bold">92%</h2>
                    <p className="text-gray-500">Model Accuracy</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center">
                    <h2 className="text-purple-600 text-2xl font-bold">+12%</h2>
                    <p className="text-gray-500">vs Historical</p>
                  </CardContent>
                </Card>
              </div>

              {/* Monthly Yield Forecast */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Yield Forecast</CardTitle>
                  <CardDescription>
                    Predicted yield with confidence intervals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      predicted: { label: "Predicted Yield", color: "#3b82f6" },
                    }}
                  >
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={yieldForecast}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="predicted"
                          stroke="#3b82f6"
                          fill="#93c5fd"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Risk & Environmental Factors */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Risk Analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={riskFactors}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label
                        >
                          {riskFactors.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex flex-wrap justify-center mt-4 gap-2">
                      {riskFactors.map((risk) => (
                        <Badge key={risk.name} style={{ background: risk.color }}>
                          {risk.name}: {risk.value}%
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Environmental Factors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Factors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <Thermometer className="w-4 h-4 text-orange-500" />
                        <span>Avg Temperature</span>
                      </div>
                      <Badge>{envFactors.temperature}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span>Soil Moisture</span>
                      </div>
                      <Badge>{envFactors.soilMoisture}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Growing Conditions</span>
                      </div>
                      <Badge>{envFactors.growingConditions}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                        <span>Disease Risk</span>
                      </div>
                      <Badge>{envFactors.diseaseRisk}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-96">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Ready to Predict
                  </h3>
                  <p className="text-gray-500">
                    Configure your parameters and generate AI-powered yield
                    predictions
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
