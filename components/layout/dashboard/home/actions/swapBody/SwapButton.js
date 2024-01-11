"use client";

import { Button } from "@material-tailwind/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const SwapButton = ({
  selectedReceivingToken,
  selectedSwappingToken,
  handleSwapButton,
}) => {
  return selectedReceivingToken === "Token" &&
    selectedSwappingToken === "Token" ? (
    <p className="flex h-10 w-full items-center justify-center rounded-lg bg-red-500 text-sm font-medium text-white">
      Select a token to swap
    </p>
  ) : selectedSwappingToken?.props?.token ===
    selectedReceivingToken?.props?.token ? (
    <div className="flex h-10 w-full items-center justify-center rounded-lg bg-red-500 text-sm font-medium text-white">
      <p className="prevent-select">
        You can&apos;t swap{" "}
        <span className="prevent-select">
          {selectedSwappingToken
            ? selectedSwappingToken.props.token.toUpperCase()
            : ""}
        </span>{" "}
        for{" "}
        <span className="prevent-select">
          {selectedReceivingToken
            ? selectedReceivingToken.props.token.toUpperCase()
            : ""}
        </span>
      </p>
    </div>
  ) : (
    <Button
      className="rounded-full bg-gradient-primary-light p-2"
      onClick={handleSwapButton}
    >
      <ArrowPathIcon className="h-6 w-6 text-white" />
    </Button>
  );
};

export default SwapButton;
