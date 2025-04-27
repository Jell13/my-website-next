// "use client"

// import React, { useEffect } from 'react'
// import { motion } from "framer-motion"

// const Loader = ({setLoading}) => {

//     const container = {
//         show: {
//           transition: {
//             staggerChildren: 0.35,
//           },
//         },
//       };
      
//       const item = {
//         hidden: { opacity: 0, y: 200 },
//         show: {
//           opacity: 1,
//           y: 0,
//           transition: {
//             ease: [0.17, 0.67, 0.83, 0.67],
//             duration: 1.6,
//           },
//         },
//         exit: {
//           opacity: 0,
//           y: -200,
//           transition: {
//             ease: "easeInOut",
//             duration: 0.8,
//           },
//         },
//       };

//       const itemMain = {
//         hidden: { opacity: 0, y: 200 },
//         show: {
//           opacity: 1,
//           y: 0,
//           transition: {
//             ease: [0.25, 0.1, 0.25, 1],
//             duration: 1.2,
//           },
//         },
//       };

//     // useEffect(() => {
//     //     const timer = setTimeout(() => {
//     //         setLoading(false)
//     //     }, 3000)
//     //     return () => clearTimeout(timer)
//     // })

//   return (
//     <motion.div className='w-full h-screen grainy flex justify-center items-center'>
//       <motion.div 
//       variants={container}
//       initial="hidden"
//       animate="show"
//       exit="exit"
//       onAnimationComplete={() => setLoading(false)}
//       className='md:w-[400px] w-[200px] md:rounded-xl'>
//         <motion.div
//         variants={itemMain}
//         >
//           <motion.img layoutId="main-image" className='object-contain md:rounded-xl' src="/myhero.png" alt=""/>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export const ImageBlock = ({src}) => {
//     return (
//         <div className=''>
//             <img src={src} alt="" />
//         </div>
//     )
// }

// export default Loader

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const Loader = ({onComplete}) => {
    const loaderRef = useRef(null);

    useEffect(() => {
        const loader = loaderRef.current;

        // Animation timeline
        const tl = gsap.timeline({
        onComplete: () => onComplete() // Callback when animation completes
        });

        // Slide up animation
        tl.to(loader, {
        // scaleY: 0,
        yPercent: -100,
        // transformOrigin: "top",
        duration: 2,
        ease: "power3.inOut"
        });
    }, [onComplete]);

    return (
        <div 
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-50"
        />
    )
}

export default Loader

