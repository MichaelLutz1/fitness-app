import { UserAuth } from "../contexts/AuthContext";

function Home() {
  const context = UserAuth();
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}

export default Home;
