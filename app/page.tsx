import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, BookOpen, Heart, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center bg-stone-100 overflow-hidden py-20">
        {/* Abstract Background Shape */}
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-[100px] hidden md:block" />
        
        <div className="container px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    Welcome to Deliverance City for Nations
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight">
                    Walking in <br/>
                    <span className="text-primary">Prophetic Grace</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
                    Join Prophet Benson in a journey of faith, healing, and revelation. A place where you belong, a family where you are loved.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <Link href="/book">
                        <Button size="lg" className="rounded-full px-8">Book a Session</Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="outline" size="lg" className="rounded-full px-8">Learn More</Button>
                    </Link>
                </div>
            </div>
            
            {/* Placeholder for Prophet Image */}
            <div className="hidden md:flex justify-center">
                <div className="w-[400px] h-[500px] bg-stone-200 rounded-t-full rounded-b-[200px] relative overflow-hidden shadow-2xl border-8 border-white">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                        Prophet Benson Image
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features / Quick Access */}
      <section className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md bg-card">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">One-on-One Sessions</h3>
                    <p className="text-muted-foreground">
                        Book a personal prophetic session with Prophet Benson for guidance and prayer.
                    </p>
                    <Link href="/book" className="text-primary font-medium hover:underline">Book Now &rarr;</Link>
                </CardContent>
            </Card>

             <Card className="hover:shadow-lg transition-shadow border-none shadow-md bg-card">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Prophetic Word</h3>
                    <p className="text-muted-foreground">
                        Access your personal prophecy notes and daily devotionals from the ministry.
                    </p>
                    <Link href="/prophecies" className="text-primary font-medium hover:underline">View Notes &rarr;</Link>
                </CardContent>
            </Card>

             <Card className="hover:shadow-lg transition-shadow border-none shadow-md bg-card">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Join the Family</h3>
                    <p className="text-muted-foreground">
                        Connect with our community. Upload testimonies and share the goodness of God.
                    </p>
                    <Link href="/login" className="text-primary font-medium hover:underline">Sign In &rarr;</Link>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="container px-4 text-center relative z-10">
          <span className="uppercase tracking-widest text-sm font-medium opacity-80 mb-4 block">Our Vision</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            "Sing to the Lord, all the earth; proclaim his salvation day after day. Declare his glory among the nations, his marvelous deeds among all peoples."
          </h2>
          <p className="font-serif text-xl italic opacity-90">— 1 Chronicles 16:23-24</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </section>

      {/* Upcoming Events / Mock Content */}
      <section className="bg-secondary/30 py-20">
          <div className="container px-4">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Upcoming Events</h2>
                      <p className="text-muted-foreground">Join us for our weekly gatherings and special services.</p>
                  </div>
                  <Button variant="outline">View All</Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                      <div key={i} className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row">
                          <div className="h-48 md:h-auto md:w-48 bg-stone-300 relative group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Event Img</div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-center">
                              <span className="text-primary font-bold text-sm mb-2">SUN, JAN {12 + i}</span>
                              <h3 className="font-serif text-2xl font-bold mb-2">Prophetic Encounter Service</h3>
                              <p className="text-muted-foreground text-sm mb-4">Experience the power of God in our special Sunday service.</p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Users className="h-4 w-4" />
                                  <span>Main Sanctuary</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
