import { TaskContext } from "../contexts/TaskContext";
import { useEffect, useContext } from "react";
import styles from './TaskItem.module.css';

const TaskItem = ({ 
    task
}) => {
    const { taskDeleteHandler, toggleTask } = useContext(TaskContext);

    useEffect(() => {
        // console.log('Mount');

        return () => {
            // console.log('Unmount');
        }
    }, []);

    return (
        <li>
            <span 
                className={task.isCompleted ? styles.completed : ''}
                onClick={() => toggleTask(task._id)}
            >
                {task.title}</span>
            <button onClick={() => taskDeleteHandler(task._id)}>x</button>
        </li>
    );
};

export default TaskItem;