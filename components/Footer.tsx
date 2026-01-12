import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-muted py-16 mt-24">
      <div className="container grid md:grid-cols-3 gap-12 text-center items-start">
        <div className="flex flex-col items-center">
          <div className="mb-6">
             <Logo />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
            Guiding souls through faith and prophecy. Join us for a life-changing experience.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="font-serif text-lg font-bold mb-6 text-foreground">Service Times</h4>
          <ul className="text-sm text-muted-foreground space-y-3">
            <li>Sunday Service: 10:00 AM</li>
            <li>Wednesday Bible Study: 6:00 PM</li>
            <li>Friday Prayer: 7:00 PM</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="font-serif text-lg font-bold mb-6 text-foreground">Contact</h4>
          <ul className="text-sm text-muted-foreground space-y-3">
            <li>123 Faith Avenue, Grace City</li>
            <li>contact@prophetbenson.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="container mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prophet Benson Ministries. All rights reserved.
      </div>
    </footer>
  );
}
