import React from "react";
import "../App.css";
import TrustedClinic from "../assets/images/TrustedClinic.png";
import AsianBranch from "../assets/images/AsianBranch.png";
import CustomerLove from "../assets/images/CustomerLove.png";
import LicensedWorker from "../assets/images/LicensedWorker.png";
import BackgroundChoosingUs from "../assets/images/BackgroundChoosingUs.png";

const WhyChoosingUs = () => {
  return (
    <div
      className="relative max-w-[1440px] w-full sm:h-[697.5px] h-[700px] lg:mt-[-58.34px] mt:[-90px] bg-cover object-cover z-[0]"
      style={{ backgroundImage: `url(${BackgroundChoosingUs})` }}
    >
      <div className="w-full lg:px-0 md:px-6 sm:px-4">
        <div className="w-full">
          <div
            className="flex lg:flex-row flex-col max-w-[1108px] w-full xl:ml-[154px] mx-auto lg:mt-[272px] sm:mt-[172px]
        lg:justify-between lg:items-start items-center lg:text-left text-center"
          >
            {/* Left side for title text */}
            <div className="flex flex-col mt-[18px]">
              <div
                className="max-w-[461px] w-full lg:h-[53px] h-auto font-poppins font-semibold
               text-[36px] leading-[45px] sm:text-[#FFFFFF] text-[#FF64AE]"
              >
                <p className="m-0">Why choosing us?</p>
              </div>
              <div
                className="max-w-[486px] w-full lg:h-[80px] h-auto sm:mt-[12px] mt-[36px]
             font-poppins font-normal text-[16px] leading-[24px] sm:text-[#D8DCFF] text-[#FF9ACB] tracking-[0.1em]"
              >
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit ut aliquam, purus sit amet luctus
                  <br />
                  venenatis.
                </p>
              </div>
            </div>
            {/* Right side for images */}
            <div className="flex sm:flex-row flex-col sm:gap-[72px]">
              {/* Left side double items*/}
              <div className="flex-col lg:mt-0 sm:mt-[43px] mt-[24px]">
                <div className="w-auto h-auto lg:mt-[4px] mt-0">
                  <img src={TrustedClinic} alt="" />
                </div>
                <div className="w-auto h-auto sm:mt-[43px] mt-[24px]">
                  <img src={AsianBranch} alt="" />
                </div>
              </div>
              {/* Right side double items */}
              <div className="flex-col lg:mt-0 sm:mt-[43px] mt-[24px]">
                <div className="w-auto h-auto lg:mt-[-1px] mt-0">
                  <img src={CustomerLove} alt="" />
                </div>
                <div className="w-auto h-auto sm:mt-[43px] mt-[24px]">
                  <img src={LicensedWorker} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChoosingUs;
