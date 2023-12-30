import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

const TokenGraphData = ({ tokenData }) => {
  return (
    <div className="flex justify-between">
      <h3 className="text-4xl font-bold text-white">
        <span className="prevent-select">$</span>
        {Number(tokenData.price).toFixed(2)}
      </h3>

      <div className="flex gap-6">
        <div className="text-right">
          <div
            className={`flex justify-end gap-1 text-base font-bold ${
              tokenData?.change < 0 ? "text-red-600" : "text-green-500"
            }`}
          >
            {tokenData.change < 0 ? (
              <>
                <h4>
                  <span className="prevent-select">-</span>
                  {Number(tokenData.change).toFixed(2)}
                  <span>{` (${Number(0).toFixed(1)}%)`}</span>
                </h4>

                <ArrowTrendingDownIcon className="h-5 w-5" />
              </>
            ) : (
              <>
                <h4>
                  <span className="prevent-select">+</span>
                  {Number(tokenData.change).toFixed(2)}
                  <span>{` (${Number(0).toFixed(1)}%)`}</span>
                </h4>

                <ArrowTrendingUpIcon className="h-5 w-5" />
              </>
            )}
          </div>

          <span className="prevent-select font-medium text-gray-500">
            24hr Change
          </span>
        </div>

        <div className="text-right">
          <h4 className="text-base font-bold text-white">
            ${tokenData.userBalance}
          </h4>

          <span className="prevent-select font-medium text-gray-500">
            24hr High
          </span>
        </div>

        <div className="text-right">
          <h4 className="text-base font-bold text-white">
            ${tokenData.userBalance}
          </h4>

          <span className="prevent-select font-medium text-gray-500">
            24hr Low
          </span>
        </div>
      </div>
    </div>
  );
};
export default TokenGraphData;
