"use client";
import { useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Dashboard from "./dashboard/page";
import Predictions from "./prediction/page";
import Recommendations from "./recommendations/page";
import Profile from "./profile/page";


export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [language, setLanguage] = useState("en");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HeroSection language={language} onNavigate={handleNavigate} />;
      case "dashboard":
        return <Dashboard language={language} />;
      case "predictions":
        return <Predictions language={language} />;
      case "recommendations":
        return <Recommendations language={language} />;
      case "profile":
        return <Profile language={language} />;
      default:
        return <HeroSection language={language} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <main>{renderCurrentPage()}</main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">CropAI</h3>
              <p className="text-green-200 text-sm">
                {language === "en" &&
                  "Empowering farmers with AI-driven insights for sustainable and profitable agriculture."}
                {language === "es" &&
                  "Empoderando a los agricultores con conocimientos impulsados por IA para una agricultura sostenible y rentable."}
                {language === "hi" &&
                  "टिकाऊ और लाभदायक कृषि के लिए AI-संचालित अंतर्दृष्टि के साथ किसानों को सशक्त बनाना।"}
                {language === "fr" &&
                  "Autonomiser les agriculteurs avec des informations alimentées par l'IA pour une agriculture durable et rentable."}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {language === "en" && "Features"}
                {language === "es" && "Características"}
                {language === "hi" && "सुविधाएं"}
                {language === "fr" && "Fonctionnalités"}
              </h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>
                  {language === "en" && "Yield Predictions"}
                  {language === "es" && "Predicciones de Rendimiento"}
                  {language === "hi" && "उत्पादन पूर्वानुमान"}
                  {language === "fr" && "Prédictions de Rendement"}
                </li>
                <li>
                  {language === "en" && "Smart Irrigation"}
                  {language === "es" && "Irrigación Inteligente"}
                  {language === "hi" && "स्मार्ट सिंचाई"}
                  {language === "fr" && "Irrigation Intelligente"}
                </li>
                <li>
                  {language === "en" && "Pest Control"}
                  {language === "es" && "Control de Plagas"}
                  {language === "hi" && "कीट नियंत्रण"}
                  {language === "fr" && "Contrôle des Ravageurs"}
                </li>
                <li>
                  {language === "en" && "Weather Analytics"}
                  {language === "es" && "Análisis Meteorológico"}
                  {language === "hi" && "मौसम विश्लेषण"}
                  {language === "fr" && "Analyse Météorologique"}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {language === "en" && "Support"}
                {language === "es" && "Soporte"}
                {language === "hi" && "सहायता"}
                {language === "fr" && "Support"}
              </h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>
                  {language === "en" && "Help Center"}
                  {language === "es" && "Centro de Ayuda"}
                  {language === "hi" && "सहायता केंद्र"}
                  {language === "fr" && "Centre d'Aide"}
                </li>
                <li>
                  {language === "en" && "Training Videos"}
                  {language === "es" && "Videos de Entrenamiento"}
                  {language === "hi" && "प्रशिक्षण वीडियो"}
                  {language === "fr" && "Vidéos de Formation"}
                </li>
                <li>
                  {language === "en" && "Community Forum"}
                  {language === "es" && "Foro de la Comunidad"}
                  {language === "hi" && "समुदायिक फोरम"}
                  {language === "fr" && "Forum Communautaire"}
                </li>
                <li>
                  {language === "en" && "Contact Us"}
                  {language === "es" && "Contáctanos"}
                  {language === "hi" && "संपर्क करें"}
                  {language === "fr" && "Nous Contacter"}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                {language === "en" && "Connect"}
                {language === "es" && "Conectar"}
                {language === "hi" && "जुड़ें"}
                {language === "fr" && "Se Connecter"}
              </h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>WhatsApp: +91 98765 43210</li>
                <li>Email: support@cropai.com</li>
                <li>Twitter: @CropAI</li>
                <li>LinkedIn: CropAI Solutions</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200 text-sm">
            <p>
              &copy; 2024 CropAI.{" "}
              {language === "en" && "All rights reserved."}
              {language === "es" && "Todos los derechos reservados."}
              {language === "hi" && "सभी अधिकार सुरक्षित।"}
              {language === "fr" && "Tous droits réservés."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
