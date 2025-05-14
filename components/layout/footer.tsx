import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">&copy; 2025 PuService.</span>
        <nav className="flex gap-2">
          <Button asChild variant="link" className="p-0 h-auto min-w-0">
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
          </Button>
          <Button asChild variant="link" className="p-0 h-auto min-w-0">
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
          </Button>
          <Button asChild variant="link" className="p-0 h-auto min-w-0">
            <a href="/help" target="_blank" rel="noopener noreferrer">
              Help Center
            </a>
          </Button>
        </nav>
      </div>
    </>
  );
}
