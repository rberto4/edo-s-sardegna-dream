import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnecdoteCardProps {
  title: string;
  content: string;
  emoji: string;
}

export const AnecdoteCard = ({ title, content, emoji }: AnecdoteCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-accent">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <span className="text-2xl">{emoji}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  );
};