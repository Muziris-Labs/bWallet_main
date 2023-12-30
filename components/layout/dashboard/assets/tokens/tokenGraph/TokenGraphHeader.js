import TokenGraphHeading from "./TokenGraphHeading";
import TokenGraphData from "./TokenGraphData";

const TokenGraphHeader = ({ name, tokenName, tokenData }) => {
  return (
    <section className="space-y-6 px-7">
      <TokenGraphHeading name={name} tokenName={tokenName} />

      <TokenGraphData tokenData={tokenData} />
    </section>
  );
};

export default TokenGraphHeader;
