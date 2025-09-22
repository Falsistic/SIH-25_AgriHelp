"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Mock data
const achievements = [
  {
    title: "Sustainable Farmer",
    desc: "Reduced water usage by 20%",
    date: "2024-03-15",
    icon: "🌱",
  },
  {
    title: "Tech Adopter",
    desc: "Successfully implemented AI recommendations",
    date: "2024-02-28",
    icon: "🤖",
  },
  {
    title: "Yield Master",
    desc: "Exceeded yield predictions by 15%",
    date: "2024-01-10",
    icon: "🌾",
  },
];

const performance = [
  { title: "Total Yield This Season", value: "185 tons", change: "+12%" },
  { title: "Average Crop Health", value: "87%", change: "+5%" },
  { title: "Water Usage Efficiency", value: "92%", change: "+8%" },
  { title: "Cost Savings", value: "$2,340", change: "+15%" },
];

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Farmer Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information, farm details, and platform
          preferences
        </p>
      </div>

      <Tabs defaultValue="personal" className="flex gap-6">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <TabsList className="flex w-full justify-start gap-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="farm">Farm Details</TabsTrigger>
          </TabsList>

          {/* Personal Tab */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </div>
                <CardAction>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src="/avatar.png"
                    alt="profile"
                    className="w-16 h-16 rounded-full bg-muted"
                  />
                  <div>
                    <p className="font-medium">Raj Patel</p>
                    <p className="text-muted-foreground text-sm">
                      Smart farmer since 2012
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <Input value="Raj Patel" readOnly />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input value="raj.patel@email.com" readOnly />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input value="+91 98765 43210" readOnly />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input value="Punjab, India" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Farm Tab */}
          <TabsContent value="farm">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Farm Information</CardTitle>
                  <CardDescription>
                    Configure your farm details and crop preferences
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Farm Size (hectares)</Label>
                  <Input value="45" />
                </div>
                <div>
                  <Label>Farming Experience (years)</Label>
                  <Input value="12" />
                </div>
                <div>
                  <Label>Primary Crop</Label>
                  <Select defaultValue="wheat">
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="maize">Maize</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Irrigation Type</Label>
                  <Select defaultValue="drip">
                    <SelectTrigger>
                      <SelectValue placeholder="Select irrigation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drip">Drip Irrigation</SelectItem>
                      <SelectItem value="sprinkler">Sprinkler</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Update Farm Details
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          
        </div>

        {/* Right Section (Side by Side) */}
        <div className="flex gap-6 w-full">
          {/* Farm Performance */}
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>Farm Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performance.map((stat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="font-semibold">{stat.value}</p>
                  </div>
                  <Badge variant="secondary">{stat.change}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="w-1/2">
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-md border p-2"
                >
                  <span className="text-xl">{ach.icon}</span>
                  <div>
                    <p className="font-medium">{ach.title}</p>
                    <p className="text-muted-foreground text-sm">{ach.desc}</p>
                    <p className="text-xs text-muted-foreground">{ach.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
}
