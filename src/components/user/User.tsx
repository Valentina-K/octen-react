import type {IUser} from "../../models/user.ts";
import type {FC} from "react";

type UserProps = {
    user: IUser;
}
export const User: FC<UserProps> = ({user}) => {
    return (
        <div className="p-2.5 rounded-2xl bg-blue-200 text-left w-1/3">
            <h2 className="text-right"><b><i>{user.username}</i></b></h2>
            <h3 className="text-xl">{user.name}</h3>
            <p><i>Contacts: </i></p>
            <a href={`mailto:${user.email}`} className="block ml-2.5">{user.email}</a>
            <a href={`tel:${user.phone}`} className="block ml-2.5">{user.phone}</a>
            <p><i>Company: </i></p>
            <p className="ml-2.5">BS: <b>{user.company.bs}</b></p>
            <p className="ml-2.5">CatchPhrase: <b>{user.company.catchPhrase}</b></p>
            <p className="ml-2.5">Name: <b>{user.company.name}</b></p>
            <p><i>Website:</i> <b>{user.website}</b></p>
            <p><i>Address: </i></p>
            <p className="ml-2.5 capitalize">zipcode: <b>{user.address.zipcode}</b></p>
            <p className="ml-2.5 capitalize">suite: <b>{user.address.suite}</b></p>
            <p className="ml-2.5 capitalize">city: <b>{user.address.city}</b></p>
            <p className="ml-2.5 capitalize">street: <b>{user.address.street}</b></p>
            <div className="ml-2.5 capitalize"><i>geo:</i>
                <p className="ml-2.5">lng: <b>{user.address.geo.lng}</b></p>
                <p className="ml-2.5">lat: <b>{user.address.geo.lat}</b></p>
            </div>

        </div>
    );
};