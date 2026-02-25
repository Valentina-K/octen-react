import * as React from "react";
import type {FC} from "react";
import "./styles.css";

type ModalProps = {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const Modal: FC<ModalProps> = ({children, onClick}) => {
    return (
        <div className="modal-overlay" onClick={onClick}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};