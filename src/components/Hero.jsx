import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-[20px] h-[180px]  rounded-full bg-[#ffaf00]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            AT <span className='text-[#ffaf00]'>Comunity</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Una comunidad para aprender <br className='sm:block hidden' />
            y disfrutar del Rust,<span className='text-[#ffaf00]'> !Entra ahora¡</span>
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
