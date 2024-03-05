import { TaskContext } from './contexts/TaskContext';
import useFetch from './hooks/useFetch';
import useTodosApi from './hooks/useTodosApi';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import styles from './App.module.css';


function App() {
  const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
  const { removeTodo, createTodo } = useTodosApi();

  const taskCreateHandler = async (newTask) => {
    const createdTask = await createTodo(newTask)
    setTasks(state => [
        ...state, 
        createdTask,
    ]);
  };

  const taskDeleteHandler = async (taskId) => {
    await removeTodo(taskId);

    setTasks(state => state.filter(x => x._id != taskId));   
  }

  // const taskDeleteHandler = (taskId) => {
  //   removeTodo(taskId)
  //     .then(() => setTasks(state => state.filter(x => x._id != taskId)));   
  // }

  const toggleTask = async (taskId) => {
    setTasks(state => state.map(x => x._id == taskId ? {...x, isCompleted : !x.isCompleted} : x))
  }
  
  return (
    <TaskContext.Provider value={{tasks, taskDeleteHandler, toggleTask}}>
      <div className={styles['site-wrapper']}>
        <header>TODO App</header>

        <main>
            {isLoading
                ? <p>Loading...</p>
                : <TaskList />
            }
            
            <CreateTask taskCreateHandler={taskCreateHandler} />
        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
