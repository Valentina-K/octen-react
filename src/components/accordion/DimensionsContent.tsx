import type {IDimensions} from "../../models/product.ts";
import type {FC} from "react";

type DimensionsProps = {
    dimensions: IDimensions;
}
export const DimensionsContent: FC<DimensionsProps> = ({dimensions}) => {
    return (
        <ul className="pl-7">
            <li key={1}>Width: <strong>{dimensions.width}</strong></li>
            <li key={2}>Height: <strong>{dimensions.height}</strong></li>
            <li key={3}>Depth: <strong>{dimensions.depth}</strong></li>
        </ul>
    );
};