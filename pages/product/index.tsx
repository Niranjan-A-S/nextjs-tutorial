import Link from "next/link";

const ProductList = ({ productID = 100 }) => {
  return (
    <ul>
      <button>
        <Link href={"/product/1"}>Product 1</Link>
      </button>
      <button>
        <Link href={"/product/2"}>Product 2</Link>
      </button>
      <button>
        <Link href={"/product/3"}>Product 4</Link>
      </button>
      <button>
        <Link href={`/product/${productID}`}>Product {productID}</Link>
      </button>
    </ul>
  );
};

export default ProductList;
