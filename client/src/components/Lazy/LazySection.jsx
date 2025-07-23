import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const LazySection = ({ children, sectionPath }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;

        if (inView  ) {
          setVisible(true);

          if (sectionPath) {
            // Get base path (e.g., /home)
            const basePath = location.pathname.split("/")[1]; // 'home'
            const newUrl = `/${basePath}/${sectionPath}`;
            
            // Replace current URL
            if (location.pathname !== newUrl) {
              window.history.replaceState({}, "", newUrl);
            }
          }
        }else{
          window.history.replaceState({},'','/home');
        }
      },
      { threshold: 0.2 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [sectionPath, location.pathname, isVisible]);

  return (
    <div ref={ref}>
      {isVisible ? children : (
        <div className="h-60 bg-gray-100 animate-pulse rounded-md" />
      )}
    </div>
  );
};

export default LazySection;
