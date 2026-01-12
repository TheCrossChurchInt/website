import { cn } from "@/lib/utils";

export default function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3 select-none group", className)}>
      <div className={cn(
        "relative flex items-center justify-center w-12 h-12 rounded-xl shadow-sm transition-all duration-300 group-hover:scale-105",
        light ? "bg-white/90 text-primary" : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 text-primary"
      )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          {/* Fire/Mane Modern Geometric Shape */}
          <path 
            d="M12 2C9 2 7 4.5 7 7c0 2 2 3 2 5s-2 3-2 5c0 3 2.5 5 5 5s5-2 5-5c0-2-2-3-2-5s2-3 2-5c0-2.5-2-5-5-5z" 
            className={cn("stroke-orange-500", light ? "stroke-orange-500/80" : "stroke-orange-500/80")} 
            fill="none"
            strokeDasharray="1 1"
          />
          
          {/* Lion Face / Shield Outline */}
          <path d="M8 8c-1 2-1 5 0 7 1 2 2 4 4 4s3-2 4-4c1-2 1-5 0-7" className="stroke-primary" strokeWidth="2" />
          
          {/* The Cross (Clean & Centered) */}
          <path d="M12 6v10" strokeWidth="2" className="stroke-primary" />
          <path d="M9 9h6" strokeWidth="2" className="stroke-primary" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={cn("font-serif text-lg font-bold leading-none tracking-tight", light ? "text-white" : "text-foreground")}>
          Prophet Benson
        </span>
        <span className={cn("text-[0.65rem] font-medium uppercase tracking-widest opacity-80", light ? "text-white/80" : "text-muted-foreground")}>
          Deliverance City for Nations
        </span>
      </div>
    </div>
  );
}
