import type {ICar} from "../../models/models.ts";
import type {FC} from "react";

type CarProps = {
    car: ICar;
}
export const Car: FC<CarProps> = ({car}) => {
    return (
        <div className={'bg-cyan-200 rounded-2xl w-2xs p-4'}>
            <p>Brand: {car.brand}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};