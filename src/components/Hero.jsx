/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { styles } from "../styles";

const Hero = () => {
  const textOptions = ["Jordan", "a Web Developer", "looking for a job"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => {
      clearInterval(textChangeInterval);
    };
  });

  return (
    <section className="flex flex-col">
      <div className="bg-black h-[350px] flex justify-center items-center">
        <h1 className={`${styles.heroHeadText} text-center`}>
          Hello, I'm {textOptions[currentTextIndex]}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
