import { useRouter } from "next/router";

const ProductDetails = () => {
  const {
    query: { productID },
  } = useRouter();

  return <h1>Product {productID}</h1>;
};

export default ProductDetails;
