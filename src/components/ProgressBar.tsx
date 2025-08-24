import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  goal: number;
}

export const ProgressBar = ({ current, goal }: ProgressBarProps) => {
  const percentage = Math.min((current / goal) * 100, 100);
  
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold text-primary">
          €{current.toLocaleString()} <span className="text-2xl text-muted-foreground">/ €{goal.toLocaleString()}</span>
        </div>
        <div className="text-lg text-muted-foreground">
          {percentage.toFixed(1)}% dell'obiettivo raggiunto
        </div>
      </div>
      
      <div className="space-y-2">
        <Progress value={percentage} className="h-4 bg-secondary" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0€</span>
          <span>€{goal.toLocaleString()}</span>
        </div>
      </div>
      
      {percentage >= 100 && (
        <div className="text-center">
          <div className="text-2xl animate-bounce">🎉</div>
          <div className="text-primary font-bold">OBIETTIVO RAGGIUNTO!</div>
          <div className="text-muted-foreground">Edoardo può comprare er gommone!</div>
        </div>
      )}
    </div>
  );
};