import { styles } from "../styles";
import Tech from "./Tech";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#915EFF]'>Mind Benders Club</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Thakur College of <br className='sm:block hidden' />
            Engineering and Technology
          </p>
        </div>
      </div>

      <div style={{paddingTop: "280px"}}>
        <Tech />
      </div>

    </section>
  );
};

export default Hero;
