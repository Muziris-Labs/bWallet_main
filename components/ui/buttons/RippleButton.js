"use client";

import React from "react";
import { useRouter } from "next/navigation";

import "./RippleButton.css";

function RippleButton({ children, style, icon, location }) {
  const router = useRouter();

  const createRipple = (event) => {
    const button = event.currentTarget;

    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.pageX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.pageY - button.offsetTop - radius}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    router.push(location);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <button
      className={`ripple-button items-center font-grotesque text-lg capitalize md:text-xl ${
        icon ? "gap-3 rounded-lg px-4 py-1.5 lg:py-2" : "px-8 py-1.5 lg:py-2"
      } ${style ? style : ""}`}
      onClick={createRipple}
    >
      {children}
      {icon}
    </button>
  );
}

export default RippleButton;
