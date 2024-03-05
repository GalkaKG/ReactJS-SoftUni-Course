import { TaskContext } from "../contexts/TaskContext";
import { useEffect, useContext } from "react";

const TaskItem = ({ 
    title,
    taskDeleteHandler,
    taskId
}) => {
    const value = useContext(TaskContext);
    console.log(value);

    useEffect(() => {
        // console.log('Mount');

        return () => {
            // console.log('Unmount');
        }
    }, []);

    return (
        <li>
            {title}
            <button onClick={() => taskDeleteHandler(taskId)}>x</button>
        </li>
    );
};

export default TaskItem;