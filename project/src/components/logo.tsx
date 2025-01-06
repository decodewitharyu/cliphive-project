import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 p-[2px]">
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-background">
          <span className="text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            CH
          </span>
        </div>
      </div>
    </div>
  );
}
