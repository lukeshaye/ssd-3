import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="animate-spin mb-4">
        <Loader2 className="w-12 h-12 text-primary" />
      </div>
      <p className="text-muted-foreground text-lg">Carregando...</p>
    </div>
  );
}
