import React from "react";
import "./Notes.css";

interface Note {
    id: number;
    author: string;
    content: string;
    date: string;
}

const notes: Note[] = [
    {
        id: 1,
        author: "John Doe",
        content: "Lorem dolor sit amet, consectetur adipiscing elit. Ut elit tellus.",
        date: "Jul 12, 2023, 11:54 am"
    },
    {
        id: 2,
        author: "John Doe",
        content: "Another note about this candidate with some more details.",
        date: "Jul 12, 2023, 11:54 am"
    },
    {
        id: 3,
        author: "John Doe",
        content: "Final note for testing the notes panel design.",
        date: "Jul 12, 2023, 11:54 am"
    }
];

const Notes: React.FC = () => {
    return (
        <aside className="notes-panel">
            <h3 className="notes-title">Notes</h3>
            {notes.map((note) => (
                <div key={note.id} className="note-card">
                    <div className="note-header">
                        <span className="note-author">{note.author}</span>
                        <span className="note-date">{note.date}</span>
                    </div>
                    <p className="note-content">{note.content}</p>
                </div>
            ))}
        </aside>
    );
};

export default Notes;
