import { Component } from "react";
import styles from './TaskItem.module.css';

class TaskItem extends Component {
    render() {
        const className = this.props.isCompleted ? styles.completed : '';

        return (
            <li onClick={() => this.props.onClick(this.props.title)} className={className}>{this.props.title}</li>
        );
    }
}

export default TaskItem;