
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const LeftBranchA = () => {
    //беремо з контексту counterValue, яке буде відображатися в параграфі
    const {counterValue} = useContext(MyContext);
    return (
        <div>Left Branch A


            <p>
                current counter value is = {counterValue}
            </p>

        </div>
    );
};
