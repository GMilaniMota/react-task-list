import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import {useNavigate} from "react-router-dom";

import "./Task.css"

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    let navigate = useNavigate();

    const handleTaskDetailsClick = (e) => {
        e.preventDefault();

        navigate(`/${task.title}`);
    }

    return (
        <>
            <div
                className="task-container"
                style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
            >
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    <h4>{task.title}</h4>
                </div>
                <div className="buttons-container">
                    <button onClick={handleTaskDetailsClick} className="see-task-details-button"> <CgInfo /> </button>
                    <button onClick={() => handleTaskDeletion(task.id)} className="remove-task-button"> <CgClose /> </button>
                </div>
            </div>
        </>
    );
}
 
export default Task;