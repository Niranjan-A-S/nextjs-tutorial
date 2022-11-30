import { useRouter } from "next/router";

// catch all routes
//wrapping the file with an extra pair of brackets will render the home page of docs in the absence of any routes

const Doc = () => {
  const { params = [] } = useRouter().query;

  return params.length === 2 ? (
    <h1>
      viewing docs for feature {params[0]} and concept {params[1]}
    </h1>
  ) : params.length === 1 ? (
    <h1>viewing docs for feature {params[0]}</h1>
  ) : (
    <h1>Docs Home Page</h1>
  );
};

export default Doc;
