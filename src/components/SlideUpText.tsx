"use client";

import { useEffect, useState, useRef } from "react";

export default function SlideUpText() {
  const [index, setIndex] = useState(0);
  const textInTimer = 3000;  // Duration for the text to stay visible (text-in)
  const textOutTimer = 2000; // Duration for the text to be in "text-out" state

  // Define a ref to access the animate-text container
  const textRef: any = useRef(null);

  const texts = [
    {
      value: "great product",
      gradientColor: "from-blue-600 via-indigo-400 to-blue-400"
    },
    {
      value: "clean code",
      gradientColor: "from-orange-600 via-yellow-400 to-orange-400"
    },
  ];

  useEffect(() => {
    let timerId: any;

    function animateText() {
      if (textRef.current) {
        const txts: any = textRef.current.children;
        const txtsLen = txts.length;

        // Remove all classes from all text elements before starting
        Array.from(txts).forEach((txt: any) => {
          txt.classList.remove("text-in", "text-out");
        });

        // Add "text-in" class to the current text
        txts[index].classList.add("text-in");

        // After the text-in animation duration, add text-out
        setTimeout(() => {
          txts[index].classList.add("text-out");
        }, textInTimer);

        // Move to the next text after both animations complete
        setTimeout(() => {
          // After the text-out animation, reset classes
          txts[index].classList.remove("text-in", "text-out");

          // Update the index to move to the next text
          setIndex((prevIndex) => (prevIndex + 1) % txtsLen); // Loop back to the start after the last text
        }, textInTimer + textOutTimer); // Total time for in and out animations
      }
    }

    // Trigger animation on the first mount and after each interval
    animateText(); // Start once on first mount

    // Set interval for continuous animation
    timerId = setInterval(() => {
      animateText();
    }, textInTimer + textOutTimer); // Total duration for one cycle of "text-in" + "text-out"

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, [index]);  // Trigger the effect when the index changes

  return (
    <div className="home-text">
      <p className="animate-text" ref={textRef}>
        {texts.map((text, i) => (
          <span
            className={`${text.gradientColor} text-5xl font-semibold h-[55px] bg-gradient-to-r ml-2 inline-block text-transparent bg-clip-text`}
            key={i}
          >
            {text.value}
          </span>
        ))}
      </p>
    </div>
  );
}
