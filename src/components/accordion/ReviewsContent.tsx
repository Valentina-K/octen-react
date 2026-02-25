import type {IReview} from "../../models/product.ts";
import type {FC} from "react";

type ReviewsProps = {
    reviews: IReview[];
}

export const ReviewsContent: FC<ReviewsProps> = ({reviews}) => {
    return (
        <div>
            {reviews.map(review => (
                <div className="p-3">
                    <div className="flex justify-between">
                        <p>Rating: <strong>{review.rating}</strong></p>
                        <p>{review.date}</p>
                    </div>
                    <p>{review.comment}</p>
                    <div className="flex justify-between">
                        <p>{review.reviewerName}</p>
                        <p>{review.reviewerEmail}</p>
                    </div>
                </div>)
                )}
        </div>
    );
};