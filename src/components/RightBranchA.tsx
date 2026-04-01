
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RightBranchA = () => {
//з контексту беремо counterValue та increment
    const {counterValue, increment} = useContext(MyContext);
    //в якості хендлера кнопки визначаємо функцію () => {
    //                 increment(counterValue);
    //             }
    //яка відпрацює при натисканні на кнопку
    return (
        <div> RightBranchA
            <button className={'border p-6 m-4'} onClick={() => {
                increment(counterValue);
            }}>click me to increment counter in LBA</button>
        </div>
    );
};
