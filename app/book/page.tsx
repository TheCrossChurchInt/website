"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { CheckCircle2, Calendar as CalendarIcon, Clock } from "lucide-react";

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });

  const timeSlots = [
    "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleNext = () => {
    if (step === 1 && date && time) setStep(2);
    else if (step === 2 && formData.name && formData.email) {
      // Mock API call
      setTimeout(() => setStep(3), 1000);
    }
  };

  if (step === 3) {
    return (
      <div className="container max-w-lg mx-auto py-20 px-4">
        <Card className="text-center p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-3xl mb-4 font-serif">Booking Confirmed!</CardTitle>
          <CardDescription className="text-lg">
            Your session with Prophet Benson has been scheduled.
          </CardDescription>
          <div className="mt-8 bg-muted p-4 rounded-lg text-left space-y-2">
            <p className="flex items-center gap-2"><CalendarIcon className="h-4 w-4" /> {date ? format(date, "PPP") : ""}</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {time}</p>
          </div>
          <div className="mt-8">
            <Button className="w-full" onClick={() => window.location.href = '/'}>Return Home</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-8 text-center">Book a Prophetic Session</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <Card className={step === 2 ? "opacity-50 pointer-events-none" : ""}>
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose a slot for your one-on-one session.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mb-6"
                disabled={(date) => date < new Date()}
              />
              <div className="grid grid-cols-3 gap-2 w-full">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={time === slot ? "default" : "outline"}
                    onClick={() => setTime(slot)}
                    className="text-xs"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Details Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <CardDescription>Please provide your information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={step === 1}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={step === 1}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Reason for Session (Optional)</label>
                  <textarea 
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Briefly describe what you'd like to discuss..."
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    disabled={step === 1}
                  />
                </div>

                <div className="pt-4">
                    {step === 1 ? (
                        <Button className="w-full" onClick={handleNext} disabled={!date || !time}>
                            Continue
                        </Button>
                    ) : (
                        <div className="flex gap-2">
                             <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                                Back
                            </Button>
                            <Button className="flex-1" onClick={handleNext} disabled={!formData.name || !formData.email}>
                                Confirm Booking
                            </Button>
                        </div>
                    )}
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4"/> Note
                </h4>
                <p className="text-sm text-muted-foreground">
                    Sessions are typically 30 minutes. Please arrive 5 minutes early. Virtual links will be sent to your email.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
