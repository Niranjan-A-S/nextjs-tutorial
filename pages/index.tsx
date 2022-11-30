import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your Order");
    router.push("./product");
  };

  return (
    <>
      <h1>Home Page</h1>
      <button>
        <Link href={"product"}>Product</Link>
      </button>
      <button>
        <Link href={"blog"}>Blog</Link>
      </button>
      {/* navigating programmatically */}
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
