import Image from "next/image";
import React from "react";

const TeamSlide = ({ teamSingle }) => {
  const { id, name, desig, img } = teamSingle;
  return (
    <div className="team__member__single common__gradient__bg single__transform">
      <div className="team__member__single__inner">
        <div className="team__member__img">
          <Image src={img} alt="tam-single" />
        </div>

        <div className="team__member__name">
          <h6>{name}</h6>
          <p>{desig}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
