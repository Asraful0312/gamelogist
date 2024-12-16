import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"; // Import for smooth scrolling

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Smoothly scroll to top on location change with a duration of 500ms
    scroll.scrollToTop({ behavior: "smooth", duration: 500 });
  }, [location]);

  return null; // Return null as this component is purely for side effects
}

export default ScrollToTop;
