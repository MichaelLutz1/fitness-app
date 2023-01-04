import { UserAuth } from "../../contexts/AuthContext";

function Home() {
  const context = UserAuth();
  return (
    <>
      <h1 className="text-center">Home page</h1>
    </>
  );
}

export default Home;
