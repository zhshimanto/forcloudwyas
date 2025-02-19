import teamImage1 from "@/assets/img/team/team_1.png";
import teamImage2 from "@/assets/img/team/team_2.png";
import teamImage3 from "@/assets/img/team/team_3.png";
import teamImage4 from "@/assets/img/team/team_4.png";
import teamImage5 from "@/assets/img/team/team_5.png";

const getTeamMembers = () => {
  const team = [
    {
      id: 1,
      name: "VNDIES GRIFFITH",
      img: teamImage1,
      desig: "Founder & CEO",
      duration: "1500",
    },
    {
      id: 2,
      name: "MINIEDS GINDIE",
      img: teamImage2,
      desig: "Founder & COO",
      duration: "1700",
    },
    {
      id: 3,
      name: "ONIDES BNIDE",
      img: teamImage3,
      desig: "Project Manager",
      duration: "1900",
    },
    {
      id: 4,
      name: "QNIDE GRIFFITH",
      img: teamImage4,
      desig: "Founder & CEO",
      duration: "2100",
    },
    {
      id: 5,
      name: "GINGER YINESED",
      img: teamImage5,
      desig: "Founder & CEO",
      duration: "2300",
    },
  ];
  return team;
};

export default getTeamMembers;
