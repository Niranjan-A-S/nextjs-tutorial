import { useRouter } from "next/router";

const Review = () => {
  const { productID, reviewID } = useRouter().query;

  return (
    <h1>
      Review {reviewID} about product {productID}
    </h1>
  );
};

export default Review;
