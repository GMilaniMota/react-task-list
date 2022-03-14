import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    let navigate = useNavigate();

    const handleBackButtonClick = (e) => {
        e.preventDefault();

        navigate('/');
    }


    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p contentEditable="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique ducimus inventore. Commodi, tempora consequatur.</p>
            </div>
        </>
    );
}
 
export default TaskDetails;