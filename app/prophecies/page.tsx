"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Book } from "lucide-react";

type Note = {
    id: number;
    title: string;
    date: string;
    content: string;
};

const MOCK_NOTES: Note[] = [
    {
        id: 1,
        title: "Word of Restoration",
        date: "Jan 10, 2026",
        content: "The Lord says that this is a season of rebuilding. What was lost shall be recovered seven-fold. Focus on family and faith."
    },
    {
        id: 2,
        title: "Guidance for the Year",
        date: "Jan 01, 2026",
        content: "A year of open doors. Walk boldly into new territories. Do not fear the unknown, for I am with you."
    }
];

export default function PropheciesPage() {
    const [notes, setNotes] = useState<Note[]>(MOCK_NOTES);
    const [selectedNote, setSelectedNote] = useState<Note | null>(MOCK_NOTES[0]);
    const [isCreating, setIsCreating] = useState(false);
    const [newNoteTitle, setNewNoteTitle] = useState("");
    const [newNoteContent, setNewNoteContent] = useState("");

    const handleSave = () => {
        if (!newNoteTitle || !newNoteContent) return;
        const newNote: Note = {
            id: Date.now(),
            title: newNoteTitle,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            content: newNoteContent
        };
        setNotes([newNote, ...notes]);
        setSelectedNote(newNote);
        setIsCreating(false);
        setNewNoteTitle("");
        setNewNoteContent("");
    };

    return (
        <div className="container mx-auto py-8 px-4 h-[calc(100vh-80px)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="font-serif text-3xl font-bold">My Prophetic Journal</h1>
                    <p className="text-muted-foreground">Archive of your personal words and revelations.</p>
                </div>
                <Button onClick={() => { setIsCreating(true); setSelectedNote(null); }}>
                    <Plus className="mr-2 h-4 w-4" /> New Entry
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 flex-1 overflow-hidden">
                {/* Sidebar List */}
                <Card className="flex flex-col h-full bg-muted/30">
                    <div className="p-4 border-b">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search notes..." className="pl-8 bg-background" />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {notes.map(note => (
                            <button
                                key={note.id}
                                onClick={() => { setSelectedNote(note); setIsCreating(false); }}
                                className={`w-full text-left p-3 rounded-md transition-colors ${selectedNote?.id === note.id && !isCreating ? 'bg-background shadow-sm border border-border' : 'hover:bg-background/50'}`}
                            >
                                <h4 className="font-medium text-sm truncate">{note.title}</h4>
                                <span className="text-xs text-muted-foreground">{note.date}</span>
                            </button>
                        ))}
                    </div>
                </Card>

                {/* Main Content Area */}
                <Card className="md:col-span-2 h-full flex flex-col bg-background shadow-sm overflow-hidden">
                    {isCreating ? (
                        <div className="flex-1 flex flex-col p-6">
                            <Input 
                                placeholder="Entry Title" 
                                className="text-xl font-bold border-none px-0 shadow-none focus-visible:ring-0 mb-4 h-auto" 
                                value={newNoteTitle}
                                onChange={(e) => setNewNoteTitle(e.target.value)}
                                autoFocus
                            />
                            <textarea 
                                className="flex-1 w-full resize-none border-none focus:outline-none text-muted-foreground leading-relaxed"
                                placeholder="Write your prophecy or note here..."
                                value={newNoteContent}
                                onChange={(e) => setNewNoteContent(e.target.value)}
                            />
                            <div className="flex justify-end pt-4 border-t">
                                <Button variant="ghost" onClick={() => { setIsCreating(false); setSelectedNote(notes[0]); }}>Cancel</Button>
                                <Button onClick={handleSave}>Save Entry</Button>
                            </div>
                        </div>
                    ) : selectedNote ? (
                        <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                                <Book className="h-4 w-4" />
                                <span>{selectedNote.date}</span>
                            </div>
                            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">{selectedNote.title}</h2>
                            <div className="prose max-w-none text-muted-foreground leading-loose">
                                {selectedNote.content}
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-muted-foreground">
                            Select a note to view
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
