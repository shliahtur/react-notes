import React from 'react'
import '../styles/Note.scss'
export const Notes = ({ notes }) => {
    if (!notes) {
        return null
    }
    return (
        <ul className="list-group">
            {notes.map(note => {
                return (
                    <li
                        key={note.id}
                        className="list-group-item"
                    >
                        {note.title}
                        <button className="delete-btn">Delete</button>
                    </li>
                )
            })
            }
        </ul>
    )
}