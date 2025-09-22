"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingUp, Droplets, Bug, BarChart3 } from "lucide-react";

export default function HeroSection({ language, onNavigate }) {
  const getText = (textObj) => {
    return textObj[language] || textObj.en;
  };

  const features = [
    {
      icon: TrendingUp,
      title: {
        en: "AI-Powered Predictions",
        es: "Predicciones con IA",
        hi: "AI-संचालित भविष्यवाणियां",
        fr: "Prédictions IA",
      },
      description: {
        en: "Advanced machine learning models analyze historical data and weather patterns",
        es: "Modelos avanzados de aprendizaje automático analizan datos históricos y patrones climáticos",
        hi: "उन्नत मशीन लर्निंग मॉडल ऐतिहासिक डेटा और मौसम पैटर्न का विश्लेषण करते हैं",
        fr: "Des modèles d'apprentissage automatique avancés analysent les données historiques et les modèles météorologiques",
      },
    },
    {
      icon: Droplets,
      title: {
        en: "Smart Irrigation",
        es: "Irrigación Inteligente",
        hi: "स्मार्ट सिंचाई",
        fr: "Irrigation Intelligente",
      },
      description: {
        en: "Optimize water usage with precision irrigation recommendations",
        es: "Optimiza el uso del agua con recomendaciones de irrigación de precisión",
        hi: "सटीक सिंचाई सिफारिशों के साथ पानी के उपयोग को अनुकूलित करें",
        fr: "Optimisez l'utilisation de l'eau avec des recommandations d'irrigation de précision",
      },
    },
    {
      icon: Bug,
      title: {
        en: "Pest Control",
        es: "Control de Plagas",
        hi: "कीट नियंत्रण",
        fr: "Contrôle des Ravageurs",
      },
      description: {
        en: "Early detection and prevention strategies for common crop pests",
        es: "Estrategias de detección temprana y prevención para plagas comunes de cultivos",
        hi: "सामान्य फसल कीटों के लिए जल्दी पहचान और रोकथाम रणनीतियां",
        fr: "Stratégies de détection précoce et de prévention pour les ravageurs communs des cultures",
      },
    },
    {
      icon: BarChart3,
      title: {
        en: "Yield Analytics",
        es: "Análisis de Rendimiento",
        hi: "उत्पादन विश्लेषण",
        fr: "Analyse de Rendement",
      },
      description: {
        en: "Detailed insights and forecasts to maximize your crop productivity",
        es: "Perspectivas detalladas y pronósticos para maximizar la productividad de tus cultivos",
        hi: "अपनी फसल उत्पादकता को अधिकतम करने के लिए विस्तृत जानकारी और पूर्वानुमान",
        fr: "Informations détaillées et prévisions pour maximiser la productivité de vos cultures",
      },
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-green-800">
                {getText({
                  en: "Smart Farming with AI-Powered Insights",
                  es: "Agricultura Inteligente con Perspectivas Impulsadas por IA",
                  hi: "AI-संचालित जानकारी के साथ स्मार्ट खेती",
                  fr: "Agriculture Intelligente avec des Informations Alimentées par l'IA",
                })}
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                {getText({
                  en: "Increase your crop yields by 10%+ using machine learning predictions, weather analysis, and personalized farming recommendations.",
                  es: "Aumenta el rendimiento de tus cultivos en más del 10% utilizando predicciones de aprendizaje automático, análisis meteorológico y recomendaciones agrícolas personalizadas.",
                  hi: "मशीन लर्निंग भविष्यवाणियों, मौसम विश्लेषण और व्यक्तिगत कृषि सिफारिशों का उपयोग करके अपनी फसल की उपज 10%+ बढ़ाएं।",
                  fr: "Augmentez vos rendements de cultures de 10%+ en utilisant des prédictions d'apprentissage automatique, une analyse météorologique et des recommandations agricoles personnalisées.",
                })}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => onNavigate("dashboard")}
              >
                {getText({
                  en: "Get Started Free",
                  es: "Comenzar Gratis",
                  hi: "मुफ्त में शुरू करें",
                  fr: "Commencer Gratuitement",
                })}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("predictions")}
              >
                {getText({
                  en: "View Demo",
                  es: "Ver Demo",
                  hi: "डेमो देखें",
                  fr: "Voir la Démo",
                })}
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  {getText({
                    en: "100+ Crops Supported",
                    es: "100+ Cultivos Soportados",
                    hi: "100+ फसलों का समर्थन",
                    fr: "100+ Cultures Supportées",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>
                  {getText({
                    en: "Real-time Weather Data",
                    es: "Datos Meteorológicos en Tiempo Real",
                    hi: "वास्तविक समय मौसम डेटा",
                    fr: "Données Météo en Temps Réel",
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1683248892987-7b6181dfd718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzQ5MTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern Agriculture Technology"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-green-800">+15% Yield</p>
                  <p className="text-sm text-gray-500">This Season</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {getText({
              en: "Powerful Features for Modern Farmers",
              es: "Características Poderosas para Agricultores Modernos",
              hi: "आधुनिक किसानों के लिए शक्तिशाली सुविधाएं",
              fr: "Fonctionnalités Puissantes pour les Agriculteurs Modernes",
            })}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {getText({
              en: "Our AI-powered platform provides comprehensive tools to optimize every aspect of your farming operation.",
              es: "Nuestra plataforma impulsada por IA proporciona herramientas integrales para optimizar cada aspecto de tu operación agrícola.",
              hi: "हमारा AI-संचालित प्लेटफॉर्म आपके कृषि संचालन के हर पहलू को अनुकूलित करने के लिए व्यापक उपकरण प्रदान करता है।",
              fr: "Notre plateforme alimentée par l'IA fournit des outils complets pour optimiser chaque aspect de votre exploitation agricole.",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border-green-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {getText(feature.title)}
              </h3>
              <p className="text-sm text-gray-600">
                {getText(feature.description)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
