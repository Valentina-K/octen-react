import React, {type ReactNode} from 'react';
import type {SimpsonType} from "../../models/models.ts";

type CharacterComponentProps = {
    character: SimpsonType;
    children: ReactNode;
}

export const CharacterComponent: React.FC<CharacterComponentProps> = ({character, children}) => {
    return (
        <div className="size-140 overflow-y-auto rounded-sm border border-black p-2.5 border-solid mb-5 shadow-2xl">
            <div className="w-xs">
                <img src={character.photo} alt={character.name} />
            </div>
            <h3 className="text-left text-orange-950 font-semibold text-3xl mb-2">{character.name} {character.surname}, {character.age} years old</h3>
            <p className="text-left">{children}</p>
        </div>
    );
};