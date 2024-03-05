import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskContext } from "../contexts/TaskContext";

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    
    return (
        <ul>
            {tasks.map(x => 
                <TaskItem 
                    key={x._id}
                    taskId={x._id} 
                    title={x.title} 
                />
            )}
        </ul>
    );
};

export default TaskList;