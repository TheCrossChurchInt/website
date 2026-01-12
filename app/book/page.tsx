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
    <div className="container mx-auto py-16 px-4 md:px-8 max-w-5xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Book a Prophetic Session</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Schedule a time for spiritual guidance and prayer. Please select a date and time that works best for you.
        </p>
      </div>
        
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {/* Calendar Section */}
        <div className={`space-y-8 ${step === 2 ? "opacity-50 pointer-events-none" : ""}`}>
           <Card className="border-none shadow-xl overflow-hidden">
            <CardHeader className="bg-primary/5 pb-8 pt-8">
              <CardTitle className="text-2xl text-center font-serif">Select Date</CardTitle>
              <CardDescription className="text-center">Available sessions for this month</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex justify-center p-8 bg-card">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-0"
                    classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4 w-full",
                        caption: "flex justify-center pt-1 relative items-center mb-4",
                        caption_label: "text-lg font-medium",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex justify-between mb-2",
                        head_cell: "text-muted-foreground rounded-md w-12 font-normal text-[0.9rem]",
                        row: "flex w-full mt-2 justify-between",
                        cell: "h-12 w-12 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100 hover:bg-accent rounded-md transition-colors",
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        day_today: "bg-accent text-accent-foreground font-bold",
                    }}
                    disabled={(date) => date < new Date()}
                  />
              </div>
              
               <div className="border-t bg-muted/20 p-8">
                    <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">Available Times</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {timeSlots.map((slot) => (
                        <Button
                            key={slot}
                            variant={time === slot ? "default" : "outline"}
                            onClick={() => setTime(slot)}
                            className="text-xs h-10 w-full transition-all hover:border-primary/50"
                        >
                            {slot}
                        </Button>
                        ))}
                    </div>
               </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Section */}
        <div className="max-w-2xl mx-auto w-full space-y-6">
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
  );
}