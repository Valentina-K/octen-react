import type {ITodo} from "../../models/todo.ts";
import {useEffect, useState} from "react";
import {getTodos} from "../../services/services.ts";
import {Todo} from "../todo/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos().then(value => setTodos(value));
    })
    return (
        <div className="flex flex-wrap justify-evenly">{todos.map(todo => <Todo todo={todo} />)}</div>
    );
};