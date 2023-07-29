import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full'
  >

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[1px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[18px]'>
            <span className='coco-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} | {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

// const Feedbacks = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Nuestro equipo</p>
//         <h2 className={styles.sectionHeadText}>ADMINISTRACION.</h2>
//         <p className={styles.sectionSubText}>El Equipo de Administración de la Comunidad es un grupo dedicado y comprometido de individuos que trabajan juntos para mantener, mejorar y hacer crecer una comunidad de manera efectiva y armoniosa. Su objetivo principal es garantizar que todos los miembros de la comunidad disfruten de un entorno seguro, inclusivo y acogedor donde puedan colaborar, comunicarse y compartir sus intereses comunes.</p>
//       </motion.div>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Feedbacks, "");


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[450px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Nuestro equipo</p>
          <h2 className={styles.sectionHeadText}>ADMINISTRACION.</h2>
          <p className={styles.sectionSubText}>El Equipo de Administración de la Comunidad es un grupo dedicado y comprometido de individuos que trabajan juntos para mantener, mejorar y hacer crecer una comunidad de manera efectiva y armoniosa. Su objetivo principal es garantizar que todos los miembros de la comunidad disfruten de un entorno seguro, inclusivo y acogedor donde puedan colaborar, comunicarse y compartir sus intereses comunes.</p>

          
        </motion.div>
      </div>

      <div className={`-mt-20 pb-5 ${styles.paddingX} flex flex-wrap gap-7`}>
        {services.map((services, index) => (
          <FeedbackCard key={services.name} index={index} {...services} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");