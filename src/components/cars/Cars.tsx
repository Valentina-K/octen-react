import {useEffect, useState} from "react";
import type {ICar} from "../../models/models.ts";
import {getCars} from "../../services/services.ts";
import {Car} from "./Car.tsx";

export const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then(cars => setCars(cars));
    },[])
    return (
        <div className={'flex flex-wrap gap-5 mt-28'}>{cars.map((car) => (<Car key={car.id} car={car} />))}</div>
    );
};