import React, { useState } from 'react';
import './TaskCard.css';

const TaskCard = ({ index, task, onUpdateTask, onDeleteTask }) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleInputChange = (e) => {
        setUpdatedTask(e.target.value);
    };

    const handleUpdateClick = () => {
        if (updatedTask.trim() !== '') {
            onUpdateTask(index, updatedTask);
            setEditMode(false);
        }
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setUpdatedTask(task);
    };

    const handleDeleteClick = () => {
        onDeleteTask(index);
    };

    return (
        <div className='task-card '>
            {editMode ? (
                <div>
                    <input type="text" value={updatedTask} onChange={handleInputChange} />
                    <button onClick={handleUpdateClick}>Update</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{task}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
