import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-7'>
        <div style={{width: 300, height: 300}}>
          <BallCanvas icon={"/mbc-tech.png"} />
        </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
