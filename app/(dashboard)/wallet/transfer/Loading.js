const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <svg height="100" width="100" id="triangle" viewBox="0 0 40 40">
        <defs>
          <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#D02129" />
            <stop offset="100%" stop-color="#750069" />
          </linearGradient>
        </defs>
        <path
          fill="#141414"
          id="polygon"
          stroke="url(#a)"
          d="M19.5 2 39 39H1z"
        />
      </svg>
    </div>
  );
};

export default Loading;
