import React from "react";
import linkedinurl from "/linkedin.png"
import weburl from "/websitelink.png"
import twitterurl from "/twitter.png"
import instagramurl from "/instagram.png"

const Footer = () => {

  return (
    <div className="bg-primary w-full flex items-center py-5">
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto p-2'>
            <div>
                <p className="text-secondary text-center">@ Mind Benders Club | All Rights Reserved.</p>
            </div>
            <div className='inset-0 flex justify-end m-3'>
                <div
                onClick={() => window.open("https://github.com/tcet-opensource/mindbenders-web", "_blank")}
                className='darkblue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                >
                    <img
                        src={weburl}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <div
                onClick={() => window.open("https://twitter.com/mbc_tcet", "_blank")}
                className='darkblue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                >
                    <img
                        src={twitterurl}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <div
                onClick={() => window.open("https://www.instagram.com/mindbenders_tcet/", "_blank")}
                className='darkblue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                >
                    <img
                        src={instagramurl}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <div
                onClick={() => window.open("https://www.linkedin.com/company/mind-benders-tcet/", "_blank")}
                className='darkblue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                    <img
                        src={linkedinurl}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
