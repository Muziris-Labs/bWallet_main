import React from "react";

const GradientIcon = ({ icon, isHovered, fill }) => {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#E51E2A", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#EA13F2", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      {React.cloneElement(icon, {
        stroke: fill ? "none" : isHovered ? "url(#gradient)" : "#ffffff",
        fill: fill ? (isHovered ? "url(#gradient)" : "#ffffff") : "none",
      })}
    </svg>
  );
};

export default GradientIcon;
