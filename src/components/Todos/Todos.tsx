import type {ITodo} from "../../models/todo.ts";
import {type FC, useEffect, useState} from "react";
import {getTodos} from "../../services/services.ts";
import {Todo} from "../Todo/Todo.tsx";

type TodosProps = {
    todos: ITodo[];
}
export const Todos: FC<TodosProps> = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos().then(value => setTodos(value));
    })
    return (
        <div className="flex flex-wrap justify-evenly">{todos.map(todo => <Todo todo={todo} />)}</div>
    );
};