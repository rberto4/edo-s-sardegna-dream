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

  const romanescoMessages = {
    5: "Ajo, già che fai qualcosa! Minimo sindacale ma amo te stesso!",
    10: "Bello sto caffè, mo' te considero amico de famiglia!",
    25: "Ajò che c'hai er core grande! Sei un santo!",
    50: "Ma quanto sei bonaccione! Edoardo te benedice!",
    100: "MADONNA SANTA! Sei proprio er migliore, che cuore!",
    200: "MA CHE FAI?! Sei impazzito? Ti amo come fosse me fratello!"
  };

  const handleDonate = (amount: number) => {
    const message = romanescoMessages[amount as keyof typeof romanescoMessages] || 
      (amount > 200 ? "MA CHE HAI VINTO AR LOTTO?! Sei er Messia!" : "Grazie de core, sei grande!");
    
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
        title: "Ajo, che fai?",
        description: "Metti un importo valido, altrimenti Edoardo rimane a terra!",
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
          "Ajo fanelli, sto da dio qua fanelli" - ma serve er gommone!
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