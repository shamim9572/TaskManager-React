import React, { useState } from 'react';
import TaskCard from './TaskCard';
import './TaskList.css'; 

const TaskList = () => {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTaskList([...taskList, newTask]);
            setNewTask('');
        }
    };

    const handleUpdateTask = (index, updatedTask) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index] = updatedTask;
        setTaskList(updatedTaskList);
    };

    const handleDeleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div className="task-list-container">
          <h2>Task List</h2>
          <input type="text" value={newTask} onChange={handleInputChange} />
          <button onClick={handleAddTask}>Add Task</button>
          <ul className="task-list">
            {taskList.map((task, index) => (
              <li key={index} className="task-card">
                <TaskCard
                  index={index}
                  task={task}
                  onUpdateTask={handleUpdateTask}
                  onDeleteTask={handleDeleteTask}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    };


export default TaskList;
