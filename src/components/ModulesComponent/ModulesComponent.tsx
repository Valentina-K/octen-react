import * as React from "react";

type ModulesComponentProps = {
    modules: string[]
}
export const ModulesComponent: React.FC<ModulesComponentProps> = ({modules}) => {
    return (
        <ul>
            {modules.map((item, index) => (<li key={index} className="ml-3.5 text-green-800 text-xl">{item}</li>))}
        </ul>
    );
};