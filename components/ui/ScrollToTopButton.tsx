"use client";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-12 right-12 rounded-full z-50 ${
        showButton ? "block" : "hidden"
      } `}
    >
      <ArrowUpIcon />
    </button>
  );
};
