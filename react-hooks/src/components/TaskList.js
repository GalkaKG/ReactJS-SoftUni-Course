import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(x => <TaskItem key={x._id} title={x.title} />)}
        </ul>
    );
};

export default TaskList;