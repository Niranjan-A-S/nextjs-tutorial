import { useRouter } from "next/router";

const ProductDetails = () => {
  const { productID } = useRouter().query;

  return <h1>Details about Product {productID}</h1>;
};

export default ProductDetails;
