"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Facebook, Check, Calendar as CalendarIcon, User } from "lucide-react";
import { useState } from "react";

export default function AdminPage() {
    const [isPosting, setIsPosting] = useState(false);
    const [fbEnabled, setFbEnabled] = useState(true);

    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPosting(true);
        setTimeout(() => {
            setIsPosting(false);
            alert("Content uploaded successfully!" + (fbEnabled ? " And posted to Facebook." : ""));
        }, 1500);
    };

    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="font-serif text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Content Upload */}
                <Card>
                    <CardHeader>
                        <CardTitle>Upload Content</CardTitle>
                        <CardDescription>Publish new sermons, events, or announcements.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Title</label>
                                <Input placeholder="Sunday Sermon Title" required />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Description</label>
                                <textarea 
                                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="Enter content details..."
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Media (Image/Video)</label>
                                <div className="border-2 border-dashed border-input rounded-md p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer">
                                    <Upload className="h-8 w-8 mb-2" />
                                    <span className="text-sm">Click to upload or drag and drop</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 py-2">
                                <button
                                    type="button"
                                    onClick={() => setFbEnabled(!fbEnabled)}
                                    className={`w-10 h-6 rounded-full p-1 transition-colors ${fbEnabled ? 'bg-blue-600' : 'bg-input'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${fbEnabled ? 'translate-x-4' : ''}`} />
                                </button>
                                <span className="text-sm font-medium flex items-center gap-1">
                                    <Facebook className="h-4 w-4 text-blue-600" />
                                    Post to Facebook Page
                                </span>
                            </div>

                            <Button className="w-full" disabled={isPosting}>
                                {isPosting ? "Uploading..." : "Publish Content"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Upcoming Bookings */}
                <div className="space-y-6">
                    <Card>
                         <CardHeader>
                            <CardTitle>Upcoming Sessions</CardTitle>
                            <CardDescription>Scheduled 1-on-1 meetings.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                                                JD
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">John Doe</p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <CalendarIcon className="h-3 w-3" /> Jan {14 + i}, 10:00 AM
                                                </div>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="outline">View</Button>
                                    </div>
                                ))}
                            </div>
                            <Button variant="link" className="w-full mt-2">View All Calendar</Button>
                        </CardContent>
                    </Card>

                     <Card className="bg-blue-50 border-blue-100">
                         <CardHeader>
                            <CardTitle className="text-blue-900 text-lg">System Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2 text-sm text-blue-800">
                                <p className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-600" /> Facebook API Connected
                                </p>
                                <p className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-600" /> Database Operational
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
