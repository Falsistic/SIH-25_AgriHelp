"use client";

import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Globe, Leaf, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar({ currentPage, onNavigate, language, onLanguageChange }) {
  const navigationItems = [
    { key: "home", label: { en: "Home", es: "Inicio", hi: "होम", fr: "Accueil" } },
    { key: "dashboard", label: { en: "Dashboard", es: "Panel", hi: "डैशबोर्ड", fr: "Tableau" } },
    { key: "predictions", label: { en: "Predictions", es: "Predicciones", hi: "पूर्वानुमान", fr: "Prédictions" } },
    { key: "recommendations", label: { en: "Recommendations", es: "Recomendaciones", hi: "सिफारिशें", fr: "Recommandations" } },
    { key: "profile", label: { en: "Profile", es: "Perfil", hi: "प्रोफ़ाइल", fr: "Profil" } },
  ];

  const languageOptions = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const getText = (textObj) => {
    return textObj[language] || textObj.en;
  };

  return (
    <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-green-800">CropAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.key
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {getText(item.label)}
              </button>
            ))}
          </div>

          {/* Language Selector & User Actions */}
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-32">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              {getText({ en: "Login", es: "Iniciar sesión", hi: "लॉगिन", fr: "Connexion" })}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => onNavigate(item.key)}
                      className={`text-left px-3 py-2 rounded-md transition-colors ${
                        currentPage === item.key
                          ? "text-green-600 bg-green-50"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {getText(item.label)}
                    </button>
                  ))}
                  <Button variant="outline" className="mt-4">
                    <User className="w-4 h-4 mr-2" />
                    {getText({ en: "Login", es: "Iniciar sesión", hi: "लॉगिन", fr: "Connexion" })}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
