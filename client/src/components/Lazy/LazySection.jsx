// components/LazySection.jsx
import React from "react";
import { useInView } from "react-intersection-observer";

const LazySection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div ref={ref}>
      {inView ? children : (
        <div className="h-60 bg-gray-100 animate-pulse rounded-md" />
      )}
    </div>
  );
};

export default LazySection;
