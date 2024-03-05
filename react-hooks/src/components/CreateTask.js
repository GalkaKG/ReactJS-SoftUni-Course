import { useState } from "react";

const CreateTask = ({
    taskCreateHandler
}) => {
    const [task, setTask] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        taskCreateHandler(task);
        setTask('');
    }

    const onChangeTask = (e) => {
        setTask(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                name="taskname" 
                value={task}
                onChange={onChangeTask} 
                placeholder="Do the dishes" 
            />
            <input type="submit" value="Add" />
        </form>
    );
};

export default CreateTask;