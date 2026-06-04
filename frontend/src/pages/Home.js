
import cloudshopImg from "../Assets/Images/cloudimage.png"

function Home() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${cloudshopImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Welcome to CloudShop</h1>
    </div>
  );
}

export default Home;
