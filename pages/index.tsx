import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <button>
        <Link href={"product"}>Product</Link>
      </button>
      <button>
        <Link href={"blog"}>Blog</Link>
      </button>
    </>
  );
};

export default Home;
