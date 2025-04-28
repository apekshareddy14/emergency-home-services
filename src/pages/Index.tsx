import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmergencyServiceCard from '../components/EmergencyServiceCard';
import EmergencyBookingForm from '../components/EmergencyBookingForm';
import { BellRing, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Plumbing Emergency",
    description: "Burst pipes, flooding, no water supply",
  },
  {
    title: "Electrical Emergency", 
    description: "Power outages, electrical hazards",
  },
  {
    title: "HVAC Emergency",
    description: "Heating/cooling system failures",
  },
  {
    title: "Lock & Security",
    description: "Lockouts, broken locks, security issues",
  },
];

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BellRing className="h-8 w-8 text-red-600" />
              <h1 className="text-3xl font-bold text-gray-900">Emergency Home Services</h1>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedService ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Select Emergency Service Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <EmergencyServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  onClick={() => setSelectedService(service.title)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-xl mx-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              ← Back to services
            </button>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {selectedService} Booking
              </h2>
              <EmergencyBookingForm />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
