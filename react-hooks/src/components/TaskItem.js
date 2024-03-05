const TaskItem = ({ 
    title,
    taskDeleteHandler,
    taskId
}) => {
    return (
        <li>
            {title}
            <button onClick={() => taskDeleteHandler(taskId)}>x</button>
        </li>
    );
};

export default TaskItem;