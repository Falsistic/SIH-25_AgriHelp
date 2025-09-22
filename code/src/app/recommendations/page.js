"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Droplets,
  Zap,
  Bug,
  AlertTriangle,
  Clock,
  CheckCircle,
  MapPin,
  TrendingUp,
} from "lucide-react";

export default function RecommendationsPage() {
  const [language] = useState("en");

  const getText = (textObj) => {
    if (!textObj) return "";
    return textObj[language] || textObj.en || "";
  };

  // --- Dummy Data (Replace with API/props later) ---
  const irrigationRecommendations = [
    {
      field: "Wheat Field A",
      priority: "high",
      description: "Soil moisture below 40%",
      water: "25mm",
      timing: "Next 2 hours",
      impact: "+8% yield potential",
      action: "Water immediately",
    },
    {
      field: "Corn Field B",
      priority: "medium",
      description: "Optimal timing for growth stage",
      water: "30mm",
      timing: "Tomorrow morning",
      impact: "+5% yield potential",
      action: "Schedule irrigation",
    },
    {
      field: "Rice Field C",
      priority: "low",
      description: "Adequate moisture levels",
      water: "0mm",
      timing: "No action needed",
      impact: "Maintaining optimal",
      action: "Monitor moisture",
    },
  ];

  const fertilizationRecommendations = [
    {
      field: "Tomato Field",
      deficiency: "Nitrogen deficiency detected",
      level: "medium",
      increase: "+12%",
      recommendation: "Apply NPK 20-10-10",
      amount: "150 kg/hectare",
      cost: "$45/hectare",
      timing: "Within 3 days",
      action: "Schedule Application",
    },
    {
      field: "Wheat Field",
      deficiency: "Phosphorus deficiency detected",
      level: "low",
      increase: "+8%",
      recommendation: "Apply DAP fertilizer",
      amount: "100 kg/hectare",
      cost: "$32/hectare",
      timing: "Next week",
      action: "Schedule Application",
    },
  ];

  const pestControlRecommendations = [
    {
      field: "Rice Field",
      issue: "Brown Planthopper - Low severity",
      treatment: "Neem oil spray",
      effectiveness: "85%",
      schedule: "Weekly for 3 weeks",
      cost: "$12/hectare",
      action: "Start Treatment",
    },
    {
      field: "Corn Field",
      issue: "Aphids - Medium severity",
      treatment: "Integrated pest management",
      effectiveness: "92%",
      schedule: "Bi-weekly monitoring",
      cost: "$25/hectare",
      action: "Start Treatment",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4" />;
      case "medium":
        return <Clock className="w-4 h-4" />;
      case "low":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {getText({
            en: "Smart Recommendations",
          })}
        </h1>
        <p className="text-gray-600">
          {getText({
            en: "AI-powered actionable insights to optimize your farming operations and maximize yields",
          })}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <span className="text-xl font-semibold">12</span>
            <span className="text-gray-500 text-sm">Active Tasks</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <span className="text-green-600 text-xl font-semibold">+15%</span>
            <span className="text-gray-500 text-sm">Potential Yield Gain</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <span className="text-blue-600 text-xl font-semibold">$240</span>
            <span className="text-gray-500 text-sm">Cost Savings</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <span className="text-xl font-semibold">8</span>
            <span className="text-gray-500 text-sm">Fields Monitored</span>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="irrigation" className="w-full">
        <TabsList className="grid grid-cols-3 w-full mb-6">
          <TabsTrigger value="irrigation" className="flex items-center justify-center gap-2 w-full">
            <Droplets className="w-4 h-4" /> Irrigation
          </TabsTrigger>
          <TabsTrigger value="fertilization" className="flex items-center justify-center gap-2 w-full">
            <Zap className="w-4 h-4" /> Fertilization
          </TabsTrigger>
          <TabsTrigger value="pest" className="flex items-center justify-center gap-2 w-full">
            <Bug className="w-4 h-4" /> Pest Control
          </TabsTrigger>
        </TabsList>


        {/* Irrigation Tab */}
        <TabsContent value="irrigation">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {irrigationRecommendations.map((rec, i) => (
                <Card key={i}>
                  <CardHeader className="flex justify-between items-center">
                    <CardTitle>{rec.field}</CardTitle>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {getPriorityIcon(rec.priority)} {rec.priority}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{rec.description}</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>Water Amount: {rec.water}</span>
                      <span>Timing: {rec.timing}</span>
                    </div>
                    <div className="mt-2 bg-green-50 text-green-800 p-2 rounded">
                      Impact: {rec.impact}
                    </div>
                    <Button className="w-full mt-4">{rec.action}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Side irrigation card */}
            <Card>
              <ImageWithFallback
                src="/images/irrigation.jpg"
                alt="Irrigation"
                className="rounded-t-xl"
              />
              <CardContent className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Water Usage Today</span>
                  <span>1,250L</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Weekly Target</span>
                  <span>8,500L</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Efficiency Rating</span>
                  <span className="text-green-600 font-semibold">92%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Fertilization Tab */}
        <TabsContent value="fertilization">
          <div className="grid md:grid-cols-2 gap-6">
            {fertilizationRecommendations.map((rec, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{rec.field}</CardTitle>
                  <CardDescription>{rec.deficiency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Deficiency Level: {rec.level}</span>
                    <span>Expected Increase: {rec.increase}</span>
                  </div>
                  <div className="bg-blue-50 p-2 rounded mb-2">
                    Recommendation: {rec.recommendation}
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Amount: {rec.amount}</span>
                    <span>Cost: {rec.cost}</span>
                    <span>Timing: {rec.timing}</span>
                  </div>
                  <Button className="w-full">{rec.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Pest Control Tab */}
        <TabsContent value="pest">
          <div className="grid md:grid-cols-2 gap-6">
            {pestControlRecommendations.map((rec, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{rec.field}</CardTitle>
                  <CardDescription>{rec.issue}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <span className="font-medium">Treatment: </span>
                    {rec.treatment}
                  </p>
                  <p>
                    <span className="font-medium">Effectiveness: </span>
                    {rec.effectiveness}
                  </p>
                  <div className="bg-orange-50 p-2 rounded my-2">
                    Treatment Schedule: {rec.schedule}
                  </div>
                  <p>Estimated Cost: {rec.cost}</p>
                  <Button className="w-full mt-4">{rec.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
