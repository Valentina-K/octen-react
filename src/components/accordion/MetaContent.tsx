import type {IMeta} from "../../models/product.ts";
import type {FC} from "react";

type MetaProps = {
    meta: IMeta;
}
export const MetaContent: FC<MetaProps> = ({meta}) => {
    return (
        <ul className="pl-7">
            <li>Created At: <strong>{meta.createdAt}</strong></li>
            <li>QR Code: <strong><a href={meta.qrCode}>Show code</a></strong></li>
            <li>Bar Code: <strong>{meta.barcode}</strong></li>
            <li>Updated At: <strong>{meta.updatedAt}</strong></li>
        </ul>
    );
};