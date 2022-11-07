import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/contact">Go to contact</Link>
    </>
  );
};

export default Home;
