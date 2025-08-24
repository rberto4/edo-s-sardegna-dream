import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DonationCard } from "@/components/DonationCard";
import { ProgressBar } from "@/components/ProgressBar";
import { AnecdoteCard } from "@/components/AnecdoteCard";
import edoardoHero from "@/assets/edoardo-hero.jpg";
import friendsGroup from "@/assets/friends-group.jpg";
import boatIcon from "@/assets/boat-icon.jpg";

const Index = () => {
  const [totalRaised, setTotalRaised] = useState(1247);
  const goal = 15000;

  const handleDonate = (amount: number) => {
    setTotalRaised(prev => prev + amount);
  };

  const anecdotes = [
    {
      title: "Er problema der noleggio",
      emoji: "😤",
      content: "L'anno scorso ar noleggiatore, Edoardo fa le manovre tutto orgoglioso... E quello: 'Benino, benino...' Ma che benino! Mo' con er gommone suo sarà lui a dire 'BENISSIMO' a tutti quanti!"
    },
    {
      title: "Er drogato con la moto d'acqua",
      emoji: "🤯",
      content: "Alla Maddalena c'era 'sto tipo completamente fuori che correva come un pazzo con la moto d'acqua. Edoardo: 'Ma quello che cazzo fa?' Praticamente era er motivo principale per cui serve er gommone: per scappare da 'sti matti!"
    },
    {
      title: "La frase leggendaria",
      emoji: "👑",
      content: "'Ajo fanelli, sto da dio qua fanelli!' - Questa è la frase che dice Edoardo ogni volta che sale su una barca. Con er suo gommone la dirà ogni santo giorno dell'estate 2026!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-ocean py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={boatIcon} alt="Boat Icon" className="w-16 h-16 float" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Gommone per Edoardo 2026
            </h1>
            <img src={boatIcon} alt="Boat Icon" className="w-16 h-16 float" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Una raccolta fondi seria per un problema serio: Edoardo deve avere er suo gommone!
          </p>
          <Badge variant="secondary" className="mt-4 text-lg px-4 py-2">
            🎯 Obiettivo: Estate 2026 in Sardegna
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <div className="space-y-8">
            {/* Hero Image */}
            <Card className="overflow-hidden">
              <img 
                src={edoardoHero} 
                alt="Edoardo in barca" 
                className="w-full h-96 object-cover"
              />
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">Ecco er nostro eroe: Edoardo! 🏆</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ogni estate è la stessa storia: "Raga, prendiamo er gommone a noleggio?" 
                  E poi iniziano i drammi: "Ma quanto costa?", "Ma chi lo guida?", "Ma se lo rompiamo?"
                  <br /><br />
                  <strong>BASTA!</strong> È arrivato er momento che Edoardo abbia er SUR gommone. 
                  Così potrà portare Eleonora, Riccardo e Roberto in giro per la Sardegna 
                  senza più sentirse dire "benino" da nessuno!
                </p>
              </CardContent>
            </Card>

            {/* Friends */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">La crew che se ne andrà in giro 🏖️</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={friendsGroup} 
                  alt="Gli amici di Edoardo" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="outline" className="justify-center py-2">👨‍💼 Edoardo</Badge>
                  <Badge variant="outline" className="justify-center py-2">👩‍🎓 Eleonora</Badge>
                  <Badge variant="outline" className="justify-center py-2">🕺 Riccardo</Badge>
                  <Badge variant="outline" className="justify-center py-2">🏊‍♂️ Roberto</Badge>
                </div>
                <p className="text-muted-foreground mt-4">
                  Questi so' i fantastici quattro che se ne andranno in giro per la Sardegna 
                  senza più rompere le scatole a nessuno per er noleggio!
                </p>
              </CardContent>
            </Card>

            {/* Anecdotes */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center">Le storie leggendarie 📚</h2>
              <div className="grid gap-6">
                {anecdotes.map((anecdote, index) => (
                  <AnecdoteCard key={index} {...anecdote} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Donation & Progress */}
          <div className="space-y-8">
            <ProgressBar current={totalRaised} goal={goal} />
            
            <DonationCard onDonate={handleDonate} />

            {/* Reward Tiers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Cosa ottieni donando 🎁</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">€5-10</span>
                    <span className="text-sm">Un grazie de core + foto della barca</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-medium">€25-50</span>
                    <span className="text-sm">Video personalizzato da Edoardo in barca</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-accent/20 rounded-lg">
                    <span className="font-medium">€100+</span>
                    <span className="text-sm">Invito per un giro in barca in Sardegna!</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/20 rounded-lg">
                    <span className="font-medium">€500+</span>
                    <span className="text-sm">Co-proprietario onorario der gommone!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Timeline 📅</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-primary rounded-full shrink-0"></div>
                    <div>
                      <div className="font-medium">Inverno 2024-2025</div>
                      <div className="text-sm text-muted-foreground">Raccolta fondi e ricerca der gommone perfetto</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-secondary rounded-full shrink-0"></div>
                    <div>
                      <div className="font-medium">Primavera 2025</div>
                      <div className="text-sm text-muted-foreground">Acquisto e preparazione</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-accent rounded-full shrink-0"></div>
                    <div>
                      <div className="font-medium">Estate 2026</div>
                      <div className="text-sm text-muted-foreground">🎉 SARDEGNA QUA SE ARRIVA! 🎉</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="gradient-sunset py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            "Ajo fanelli, sto da dio qua fanelli!"
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Aiuta Edoardo a realizzare er sogno e a portare la crew in Sardegna con stile!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-8 py-4"
          >
            💙 Dona ora per er gommone! 💙
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
