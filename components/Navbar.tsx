import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>
        
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/book" className="text-sm font-medium hover:text-primary transition-colors">
            Book Session
          </Link>
          <Link href="/prophecies" className="text-sm font-medium hover:text-primary transition-colors">
            My Prophecies
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
            Admin
          </Link>
        </div>

        <div className="flex items-center gap-4">
           <Link href="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
           </Link>
           <Link href="/book">
            <Button size="sm">
              Book Now
            </Button>
           </Link>
        </div>
      </div>
    </nav>
  );
}
