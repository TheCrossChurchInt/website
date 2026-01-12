import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 mt-24">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start mb-4">
             <Logo />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Guiding souls through faith and prophecy. Join us for a life-changing experience.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Service Times</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Sunday Service: 10:00 AM</li>
            <li>Wednesday Bible Study: 6:00 PM</li>
            <li>Friday Prayer: 7:00 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>123 Faith Avenue, Grace City</li>
            <li>contact@prophetbenson.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prophet Benson Ministries. All rights reserved.
      </div>
    </footer>
  );
}
