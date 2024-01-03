"use client";

import { useState, useEffect } from "react";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";

const CopyButton = ({ textToCopy, style, size }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <button
      onClick={handleCopy}
      className={`rounded bg-gray-900 p-1 transition-colors hover:bg-gray-900/80 ${style}`}
    >
      {copied ? (
        <CheckIcon className={`text-green-500 ${size}`} />
      ) : (
        <DocumentDuplicateIcon className={`text-gray-500 ${size}`} />
      )}
    </button>
  );
};

export default CopyButton;
