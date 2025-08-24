import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface DonationCardProps {
  onDonate: (amount: number) => void;
}

export const DonationCard = ({ onDonate }: DonationCardProps) => {
  const [customAmount, setCustomAmount] = useState("");
  const { toast } = useToast();

  const presetAmounts = [5, 10, 25, 50, 100, 200];

  const donationMessages = {
    5: "Grazie! Ogni piccolo contributo conta per er gommone!",
    10: "Ottimo! Stiamo costruendo il sogno mattone per mattone!",
    25: "Fantastico! Edoardo ti ringrazia di cuore!",
    50: "Incredibile! Il gommone si avvicina sempre di più!",
    100: "WOW! Sei fantastico, grazie mille!",
    200: "STRAORDINARIO! Sei un vero amico!"
  };

  const handleDonate = (amount: number) => {
    const message = donationMessages[amount as keyof typeof donationMessages] || 
      (amount > 200 ? "INCREDIBILE! Hai vinto alla lotteria?! Grazie!" : "Grazie di cuore, sei fantastico!");
    
    toast({
      title: "Donazione ricevuta! 🚤",
      description: message,
      duration: 5000,
    });
    
    onDonate(amount);
  };

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Attenzione!",
        description: "Inserisci un importo valido per aiutare Edoardo!",
        variant: "destructive"
      });
      return;
    }
    
    handleDonate(amount);
    setCustomAmount("");
  };

  return (
    <Card className="gradient-ocean border-0 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-white text-center text-2xl font-bold">
          🚤 Aiuta Edoardo a comprare er gommone! 🚤
        </CardTitle>
        <p className="text-white/90 text-center">
          "Non più 'benino'! Con er gommone suo, le manovre saranno perfette!"
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {presetAmounts.map((amount) => (
            <Button
              key={amount}
              onClick={() => handleDonate(amount)}
              variant="secondary"
              className="text-lg font-bold bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300"
            >
              €{amount}
            </Button>
          ))}
        </div>
        
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Importo personalizzato"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70"
            />
            <Button
              onClick={handleCustomDonate}
              variant="secondary"
              className="shrink-0 font-bold hover:scale-105 transition-all duration-300 bg-coral text-white hover:bg-coral/90"
            >
              Dona!
            </Button>
          </div>
          <p className="text-white/80 text-sm text-center">
            * Ogni euro conta per realizzare er sogno! 💙
          </p>
        </div>
      </CardContent>
    </Card>
  );
};