export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4">
             <div className="max-w-3xl mx-auto text-center space-y-8">
                 <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">About Prophet Benson</h1>
                 <p className="text-xl text-muted-foreground leading-relaxed">
                     Prophet Benson is a servant of God dedicated to preaching the Gospel of Truth, Healing, and Liberation. With over 15 years of ministry, he has touched lives across the globe, bringing the prophetic word to those in need of direction.
                 </p>
                 <div className="h-64 bg-stone-200 rounded-xl flex items-center justify-center text-muted-foreground">
                     (Image of Ministry)
                 </div>
                 <div className="text-left space-y-4">
                     <h2 className="font-serif text-2xl font-bold">Our Mission</h2>
                     <p className="text-muted-foreground">
                         To raise a generation of believers who walk in power, love, and sound mind. We believe in the practical application of the Word of God to transform societies.
                     </p>
                     <h2 className="font-serif text-2xl font-bold">What We Believe</h2>
                     <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                         <li>The Trinity: Father, Son, and Holy Spirit.</li>
                         <li>The authority of the Bible.</li>
                         <li>Salvation through grace alone.</li>
                         <li>The power of prayer and prophecy.</li>
                     </ul>
                 </div>
             </div>
        </div>
    );
}
