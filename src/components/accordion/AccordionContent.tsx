import {type FC, type ReactNode, useState} from "react";
import arrow from "../../assets/arrow_up.png";
import "./styles.css";
type AccordionProps = {
    title: string;
    children: ReactNode;
}

export const AccordionContent: FC<AccordionProps> = ({title, children}) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className={`accordion ${open ? "open" : ""}`}>
            <div className="accordion-header" onClick={() => setOpen(!open)}>
                <h4>{title}</h4>
                {open ?
                    <img src={arrow} alt="up" className="arrow"/> :
                    <img src={arrow} alt="down" className="arrow down"/>
                }
            </div>
            <div className="accordion-body">
                {children}
            </div>
        </div> );
};