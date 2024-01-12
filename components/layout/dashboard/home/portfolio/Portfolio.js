import PortfolioGraph from "./PortfolioGraph";
import PortfolioAssets from "./PortfolioAssets";

const Portfolio = () => {
  return (
    <div className="rounded-xl bg-background-black p-4">
      <PortfolioGraph />
      <PortfolioAssets />
    </div>
  );
};

export default Portfolio;
