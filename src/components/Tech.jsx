import React from "react";
import mbctech from "/mbc-tech.png"
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-7'>
        <div style={{width: "350px", height: "350px"}}>
          <BallCanvas icon={mbctech} />
        </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
