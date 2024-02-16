import HeroHome from "../components/HeroHome";
import HotBids from "../components/HotBids";
import Property from "../components/Property";
import TopCreators from "../components/TopCreators";
import Trends from "../components/Trends";
import Wallet from "../components/Wallet";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <Wallet />
      <HotBids />
      <Property />
      <Trends />
      <TopCreators />
    </div>
  );
};

export default Home;
