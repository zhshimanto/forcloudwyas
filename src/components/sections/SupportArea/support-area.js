import React from 'react';
import Image from 'next/image';
import shape_2 from "@/assets/img/brand/shape-2.png";

// support data  
const support_content = [
    {
        id: 1, 
        num: 8, 
        sym: "hr",
        duration: 1500,
        cls: "fadeLeft",
        title: "Quick Result",
        info: "Average time to resolve cyber attack."
    },
    {
        id: 2, 
        num: 3, 
        sym: "hr",
        duration: 2000,
        cls: "",
        title: "Quick Reply",
        info: "Average time to resolve cyber attack."
    },
    {
        id: 3, 
        num: 94, 
        sym: "%",
        duration: 2400,
        cls: "fadeRight",
        title: "Quick Response",
        info: "Calling answered within 15 seconds."
    },
]

const SupportArea = () => {
    return (
        <section className="tp-support-feature-area pb-100">
            <div className="container">
               <div className="row">
                {support_content.map((item, i) =>
                    <div key={i} className="col-lg-4">
                        <div className={`tp-support-feature-item ${item.cls}`}
                             data-aos="fade-up"
                             data-aos-duration={item.duration}>
                            <div className="tp-support-feature-counter">
                                <h3 className="support-feature-title">
                                    <span>{item.num}</span>
                                    {item.sym}
                                </h3>
                            </div>
                            <div className="tp-support-feature-content">
                                <h4 className="tp-support-feature-content-title">{item.title}</h4>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    </div>                
                )}  
               </div>
            </div>
        </section>
    );
};

export default SupportArea;
