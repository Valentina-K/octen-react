import type {IMeta} from "../../models/product.ts";
import type {FC} from "react";

type MetaProps = {
    meta: IMeta;
}
export const MetaContent: FC<MetaProps> = ({meta}) => {
    return (
        <ul className="pl-7">
            <li key={1}>Created At: <strong>{meta.createdAt}</strong></li>
            <li key={2}>QR Code: <strong><a href={meta.qrCode}>Show code</a></strong></li>
            <li key={3}>Bar Code: <strong>{meta.barcode}</strong></li>
            <li key={4}>Updated At: <strong>{meta.updatedAt}</strong></li>
        </ul>
    );
};