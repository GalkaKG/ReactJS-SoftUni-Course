import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
    render() {
        return(
            <ul>
              <TaskItem title="Title 1" />
              <TaskItem title="Title 2" />
              <TaskItem title="Title 3" />
            </ul>
        );
    }
}

export default TaskList;