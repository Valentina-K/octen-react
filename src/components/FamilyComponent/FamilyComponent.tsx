import React from 'react';
import type {SimpsonType} from "../../models/models.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";

type CharacterComponentProps = {
    family: SimpsonType[];
}

export const FamilyComponent: React.FC<CharacterComponentProps> = ({family}) => {
    return (
        <>{family.map((character, index) => (<CharacterComponent key={index} character={character}>{character.info}</CharacterComponent>))}</>
    );
};