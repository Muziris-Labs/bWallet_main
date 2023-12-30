import TokenGraphTime from "./TokenGraphTime";
import TokenGraphHeader from "./TokenGraphHeader";

const TokenGraph = ({ name, tokenName, tokenData, isLoading }) => {
  return (
    <section className="flex-1 space-y-4 rounded-xl bg-background-black py-5 font-grotesque">
      <TokenGraphHeader
        name={name}
        tokenName={tokenName}
        tokenData={tokenData}
        isLoading={isLoading}
      />

      <TokenGraphTime isLoading={isLoading} />
    </section>
  );
};

export default TokenGraph;
