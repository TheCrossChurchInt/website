import { cn } from "@/lib/utils";

export default function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5 select-none group", className)}>
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-lg shadow-sm transition-all duration-300 group-hover:scale-105",
        light ? "bg-white text-primary" : "bg-primary text-primary-foreground"
      )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
           {/* Stylized Cross */}
           <path d="M12 3v18" />
           <path d="M6 9h12" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold leading-none tracking-tight", light ? "text-white" : "text-foreground")}>
          Prophet Benson
        </span>
        <span className={cn("text-[0.65rem] font-medium uppercase tracking-widest opacity-80", light ? "text-white/80" : "text-muted-foreground")}>
          Deliverance City for Nations
        </span>
      </div>
    </div>
  );
}
