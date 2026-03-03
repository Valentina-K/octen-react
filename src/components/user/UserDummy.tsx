import type {IUserDummy} from "../../models/user.ts";
import type {FC} from "react";

type UserDummyProps = {
    user: IUserDummy;
}
export const UserDummy: FC<UserDummyProps> = ({user}) => {
    return (
        <div className="p-2.5 rounded-2xl bg-blue-200 text-left w-2/5">
            <h2 className="text-right"><i><b>{user.username}</b></i></h2>
            <img src={user.image} alt={user.username}/>
            <h3 className="text-lg"><i><b>{user.firstName} {user.lastName}</b></i></h3>
            <h3>Maiden name: {user.maidenName}</h3>
            <p>Role: <b>{user.role}</b></p>
            <p>Gender: <b>{user.gender}</b></p>
            <p>Age: <b>{user.age}</b></p>
            <p>Birth date: <b>{user.birthDate}</b></p>
            <p>university: <b>{user.university}</b></p>
            <p>ein: <b>{user.ein}</b></p>
            <p>ssn: <b>{user.ssn}</b></p>
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
            <div className="capitalize"><i>Characteristics:</i>
                <p className="ml-2.5">blood group: <b>{user.bloodGroup}</b></p>
                <p className="ml-2.5">hair: {user.hair.color} {user.hair.type}</p>
                <p className="ml-2.5">eye color: <b>{user.eyeColor}</b></p>
                <p className="ml-2.5">height: <b>{user.height}</b></p>
                <p className="ml-2.5">weight: <b>{user.weight}</b></p>
            </div>
            <div className="capitalize"><i>bank information:</i>
                <p className="ml-2.5">iban: <b>{user.bank.iban}</b></p>
                <p className="ml-2.5">card expire: <b>{user.bank.cardExpire}</b></p>
                <p className="ml-2.5">card type: <b>{user.bank.cardType}</b></p>
                <p className="ml-2.5">currency: <b>{user.bank.currency}</b></p>
                <p className="ml-2.5">card number: <b>{user.bank.cardNumber}</b></p>
            </div>
            <div className="capitalize"><i>crypto:</i>
                <p className="ml-2.5">wallet: <b>{user.crypto.wallet}</b></p>
                <p className="ml-2.5">coin: <b>{user.crypto.coin}</b></p>
                <p className="ml-2.5">network: <b>{user.crypto.network}</b></p>
            </div>
            <div className="capitalize"><i>Advanced information:</i>
                <p className="ml-2.5">ip: <b>{user.ip}</b></p>
                <p className="ml-2.5">mac address: <b>{user.macAddress}</b></p>
                <p className="ml-2.5">user agent: <i className="text-xs">{user.userAgent}</i></p>
                <p className="ml-2.5">password: <b>{user.password}</b></p>
            </div>
        </div>
    );
};