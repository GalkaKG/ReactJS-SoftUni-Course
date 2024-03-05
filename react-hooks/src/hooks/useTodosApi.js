const url = 'http://localhost:3030/jsonstore/todos';

const useTodosApi = () => {

    const removeTodo = (todoId) => {
        return fetch(`${url}/${todoId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }

    const createTodo = (title) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({title, isCompleted: false})
        }).then(res => res.json())
    };

    return {
        removeTodo,
        createTodo,
    }
};

export default useTodosApi;