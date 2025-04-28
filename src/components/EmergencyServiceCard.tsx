
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BellRing } from "lucide-react";

interface EmergencyServiceCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const EmergencyServiceCard = ({ title, description, onClick }: EmergencyServiceCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg hover:scale-105"
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-red-100 rounded-full">
          <BellRing className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default EmergencyServiceCard;
