import type {IUser} from "../../models/user.ts";
import type {FC} from "react";

type UserProps = {
    user: IUser;
}
export const User: FC<UserProps> = ({user}) => {
    return (
        <div className="w-1/4 rounded-2xl bg-blue-100 p-4">
            <h2 className="text-right"><i><b>{user.username}</b></i></h2>
            <img src={user.image} alt={user.username}/>
            <h3 className="text-lg"><i><b>{user.firstName} {user.lastName}</b></i></h3>
            <p><i>Contacts: </i></p>
            <a href={`mailto:${user.email}`} className="block ml-2.5">{user.email}</a>
            <a href={`tel:${user.phone}`} className="block ml-2.5">{user.phone}</a>
            <p className="capitalize"><i>address:</i></p>
            <p className="ml-2.5 capitalize">country: <b>{user.address.country}</b></p>
            <p className="ml-2.5 capitalize">address: <b>{user.address.address}</b></p>
            <p className="ml-2.5 capitalize">city: <b>{user.address.city}</b></p>
            <p className="ml-2.5 capitalize">postal Code: <b>{user.address.postalCode}</b></p>
            <p className="ml-2.5 capitalize">stateCode: <b>{user.address.stateCode}</b></p>
            <p className="ml-2.5 capitalize">state: <b>{user.address.state}</b></p>
            <div className="ml-2.5 capitalize"><i>geo:</i>
                <p className="ml-2.5">lng: <b>{user.address.coordinates.lng}</b></p>
                <p className="ml-2.5">lat: <b>{user.address.coordinates.lat}</b></p>
            </div>
        </div>
    );
};