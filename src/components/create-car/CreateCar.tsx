import {useForm} from "react-hook-form";
import type {ICar} from "../../models/models.ts";
import {addCar} from "../../services/services.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {useState} from "react";

export const CreateCar = () => {
    const [ok,setOk] = useState<boolean>(false)
    const {register, handleSubmit, reset, formState: {errors, isValid}} =
        useForm<ICar>({mode: "all", resolver: joiResolver(carValidator)});

    function handlerSubmit(car: ICar) {
        addCar(car).then((status)=> {
            if(status === 201) setOk(true);
        });
        reset();
    }

    return (
        <div className={'ml-0 mr-0 w-full mt-32'}>
            <form onSubmit={handleSubmit(handlerSubmit)} className={'flex flex-col items-center justify-center gap-5 p-4'}>
                <label className={'w-full inline-block text-left text-lg text-gray-900'}>Brand:
                    <input type="text" className={'p-2.5 text-gray-900 bg-gray-300 rounded-2xl w-full'} {...register("brand")} required={true}/>
                    <div>{errors.brand?.message}</div>
                </label>
                <label className={'w-full inline-block text-left text-lg text-gray-900'}>Price:
                    <input type="number" className={'p-2.5 text-gray-900 bg-gray-300 rounded-2xl w-full'} {...register("price")} required={true}/>
                    <div>{errors.price?.message}</div>
                </label>
                <label className={'w-full inline-block text-left text-lg text-gray-900'}>Year:
                    <input type="number" className={'p-2.5 text-gray-900 bg-gray-300 rounded-2xl w-full'} {...register("year")} required={true}/>
                    <div>{errors.year?.message}</div>
                </label>
                <button type={"submit"} className={'bg-green-700 p-3.5 cursor-pointer rounded-2xl text-white hover:bg-green-950 disabled:bg-gray-400 disabled:cursor-default'} disabled={!isValid}>Create car</button>
            </form>
            <div>{ok && (<p className={'text-lg text-emerald-950'}>The car have been add to the database</p>)}</div>
        </div>
    );
};