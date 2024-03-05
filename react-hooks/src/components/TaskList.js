import TaskItem from "./TaskItem";

const TaskList = ({ 
    tasks, 
    taskDeleteHandler, 
}) => {
    return (
        <ul>
            {tasks.map(x => 
                <TaskItem 
                    key={x._id}
                    taskId={x._id} 
                    title={x.title} 
                    taskDeleteHandler={taskDeleteHandler} 
                />
            )}
        </ul>
    );
};

export default TaskList;