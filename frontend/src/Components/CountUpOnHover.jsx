import { useRef, useState } from "react";

const CountUpOnHover = ({ end = 400000, duration = 800 }) => {
  const [count, setCount] = useState(end); // show 400K initially
  const [hasAnimated, setHasAnimated] = useState(false);
  const intervalRef = useRef(null);

  const startCount = () => {
    if (hasAnimated) return; // run only once per hover

    setHasAnimated(true);
    let start = 0;
    setCount(0);

    const increment = end / (duration / 16);

    intervalRef.current = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(intervalRef.current);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <span
      onMouseEnter={startCount}
      className="cursor-pointer bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent"
    >
      {Math.floor(count / 1000)}K+
    </span>
  );
};

export default CountUpOnHover;
