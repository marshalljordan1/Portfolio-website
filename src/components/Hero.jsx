import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-black h-[450px] flex justify-center items-center">
        <h1 className={`${styles.heroHeadText} `}>Hello, I&#39;m Jordan</h1>
      </div>
    </section>
  );
};

export default Hero;
