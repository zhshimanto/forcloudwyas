import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Images
import shape1 from "@/assets/img/fun-fact/shape-1.png";
import shape2 from "@/assets/img/fun-fact/shape-2.png";
import shape3 from "@/assets/img/fun-fact/shape-3.png";
import shape4 from "@/assets/img/fun-fact/shape-4.png";
import shadow from "@/assets/img/fun-fact/shadow.png";
import worldImg from "@/assets/img/fun-fact/world.png";

const stats = [
   {
      id: 1,
      number: "10+",
      text: "Experience"
   },
   {
      id: 2,
      number: "255",
      text: "square area"
   },
   {
      id: 3,
      number: "310",
      text: "square area"
   }
];

const ServiceArea = () => {
   const reloadRef = useRef(null);

   useEffect(() => {
      const handleScroll = () => {
         if (reloadRef.current) {
            reloadRef.current.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <section className="tp-fun-fact-area pt-80 pb-65 p-relative">
         <div className="container container-1400">
            <div className="tp-fun-fact-shape">
               <Image className="shape-1" src={shape1} alt="shape" />
               <Image className="shape-2" src={shape2} alt="shape" />
               <Image className="shape-3" src={shape3} alt="shape" />
               <Image className="shape-4" src={shape4} alt="shape" />
               <Image className="shadow" src={shadow} alt="shadow" />
            </div>

            <div className="row">
               <div className="col-lg-2 col-md-4">
                  <div className="tp-fun-fact-wrapper-box">
                     {stats.map((item) => (
                        <div key={item.id} className="tp-fun-fact-wrapper">
                           <h3 className="counter-title">
                              <span>{item.number}</span>
                           </h3>
                           <p>{item.text}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="col-lg-4 col-md-8">
                  <div className="tp-fun-fact-thumb p-relative">
                     <Image 
                        ref={reloadRef}
                        id="reload" 
                        src={worldImg} 
                        alt="world" 
                     />
                  </div>
               </div>

               <div className="col-lg-6 col-md-12">
                  <div className="tp-fun-fact-content">
                     <div className="tp-fun-fact-title-wrapper">
                        <span className="tp-section-title__pre">
                           service <span className="title-pre-color">IT Solutions</span>

                        </span>
                        <h3 className="tp-section-title">
                           Tech Change The World
                        </h3>
                        <p>
                           Our company provides a full range of services for the construction of <br /> private houses and cottages since 19
                        </p>
                        <ul>
                           <li>
                              <span className="list-arrow">
                                 <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 1.5L15 5.5L10.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 5.5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                 </svg>
                              </span>
                              series of manual and semi-manual activities.
                           </li>
                           <li>
                              <span className="list-arrow">
                                 <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 1.5L15 5.5L10.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 5.5H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                 </svg>
                              </span>
                              construction is different from other industries.
                           </li>
                        </ul>
                        <div className="tp-fun-fact-btn">
                           <Link className="default__button" href="/services">
                              Tell us How Can We Help
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServiceArea;
