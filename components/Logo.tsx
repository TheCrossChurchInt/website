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
          {/* Fire/Mane Shape */}
          <path 
            d="M12 2.5c0 0-2.5 3-3 4.5-.5 1.5-3 2-3 4 0 4 3 8 6 8s6-4 6-8c0-2-2.5-2.5-3-4-.5-1.5-3-4.5-3-4.5z" 
            className="stroke-orange-500 fill-orange-500/20" 
            strokeWidth="1.5"
          />
          
          {/* Lion Face Hints */}
          <path d="M15 13c0 0-1 1.5-3 1.5S9 13 9 13" strokeWidth="1.5" /> {/* Mouth */}
          <path d="M8.5 11.5c0 0 .5-.5 1-.5" /> {/* Eye L */}
          <path d="M14.5 11.5c0 0 .5-.5 1-.5" /> {/* Eye R */}
          
          {/* The Cross (Bold, Center) */}
          <path d="M12 5.5v8" strokeWidth="2.5" className="stroke-primary" />
          <path d="M9.5 8h5" strokeWidth="2.5" className="stroke-primary" />
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