
import type {ITodo} from "../../models/todo.ts";
import done from '../../assets/done.png';
import in_progress from '../../assets/in_progress.png'
import type {FC} from "react";
import './styles.css';

type TodoProps = {
    todo: ITodo;
}
export const Todo: FC<TodoProps> = ({todo: {id, completed, title, userId}}) => {
    const src: string = completed ? done : in_progress;
    const status: string = completed ? "Completed" : "Pending";
    return (
        <div className="relative p-3 border-b-blue-900 border-0 w-2/5 rounded-2xl mb-5 text-left bg-indigo-100 cursor-pointer hover:shadow-inner shadow-fuchsia-950">
            <img src={src} alt="status" className="absolute top-1 right-1 w-8"/>
            <h2 className="text-3xl">User: {userId}</h2>
            <h3 className="capitalize font-semibold text-2xl">Task #{id}: {title}</h3>
            <p className="text-xl">Status: <span className={completed? 'completed' : 'pending'}>{status}</span></p>
        </div>
    );
};
