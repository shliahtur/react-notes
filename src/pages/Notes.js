import React from 'react'

export const Notes = ({ notes }) => {
    return (
        <ul className="list-group">
            {
                notes.map(note => {
                    <li
                        key={note.id}
                        className="list-group-item"
                    >
                        {note.title}
                        <button className="delete-btn">Delete</button>
                    </li>
                })
            }
        </ul>
    )
}