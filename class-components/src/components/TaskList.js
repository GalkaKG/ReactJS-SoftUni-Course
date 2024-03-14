import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                { title: 'Task 11', isCompleted: false },
                { title: 'Task 22', isCompleted: false },
                { title: 'Task 33', isCompleted: false },
            ],
             filter: 'all',
             newTask: '',
             character: {},
        }  

        this.newTaskChangeHandler = this.newTaskChangeHandler.bind(this);
    }

    componentDidMount() {
        // console.log('Did mount');
        fetch(`https://swapi.dev/api/people/4`)
            .then(res => res.json())
            .then(result => {
                this.setState({character: result})
            });
    }

    componentDidUpdate() {
        console.log('Did update');
    }

    // componentWillUnmount() {

    // }

    newTaskChangeHandler (e) {
        this.setState({newTask: e.target.value})
    }

    addNewTaskHandler(e) {
        e.preventDefault();
        this.setState((state, props) => ({
            tasks: [...state.tasks, { title: state.newTask, isCompleted: false }],
            newTask: '',
        }));
    }

    taskClickHandler(taskTitle) {
        this.setState(state => ({
            tasks: state.tasks.map(x => x.title === taskTitle ? {...x, isCompleted: !x.isCompleted} : x)
        }));
    }

    render() {
        return(
            <>  <h2>Current Character: {this.state.character.name}</h2>

                <ul>
                    {this.state.tasks.map(x => 
                        <TaskItem 
                            key={x.title} 
                            title={x.title} 
                            isCompleted={x.isCompleted} 
                            onClick={this.taskClickHandler.bind(this)}
                        />)}
                </ul>

                <form onSubmit={this.addNewTaskHandler.bind(this)}>
                    <label htmlFor="new-task"></label>
                    <input 
                        type="text" 
                        id="new-task" 
                        name="newTask" 
                        value={this.state.newTask} 
                        // onChange={this.newTaskChangeHandler.bind(this)}
                        onChange={this.newTaskChangeHandler}
                    />

                    <input type="submit" value="Add" />
                </form>
            </>
        );
    }
}

export default TaskList;