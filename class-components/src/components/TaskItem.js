import { Component } from "react";

class TaskItem extends Component {
    render() {
        return (
            <li>{this.props.title}</li>
        );
    }
}

export default TaskItem;