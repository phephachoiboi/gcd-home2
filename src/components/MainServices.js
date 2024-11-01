import React from "react";
import "../App.css";
import Icon2Left from "../assets/images/Icon2Left.png";
import Icon2Mid from "../assets/images/Icon2Mid.png";
import Icon2Right from "../assets/images/Icon2Right.png";
import LearnMoreButtonUs from "../assets/images/LearnMoreButtonUs.svg";
import WaveLine from "../assets/images/WaveLine.svg";

const MainServices = () => {
  return (
    <div className="w-full lg:px-0 md:px-6 sm:px-4">
      <div className="w-full">
        <div className="flex flex-col max-w-[915px] w-full h-auto mt-[157.64px] mx-auto">
          {/* Upper side for text */}
          <div className="flex flex-col mx-auto text-center">
            <div className="w-full font-poppins font-semibold text-[16px] leading-[20px] text-[#FF64AE] text-center">
              <p className="m-0">Main Services</p>
            </div>
            <div className="w-full h-[53px] mt-[12px] font-poppins font-semibold text-[36px] leading-[45px] text-[#091156]">
              <p className="m-0">Our focus services</p>
            </div>
            <div className="w-full h-[33px] mt-[12px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0.1em] text-[#8B8B8B]">
              <p className="m-0">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          {/* Lower side for images */}
          <div className="flex flex-wrap gap-[66px] max-w-[915px] w-full h-auto mt-[68px] mx-auto justify-center z-[1]">
            {/* Left box */}
            <div
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-[261px] w-full h-[303px]
             rounded-[25px] border-[1px] bg-[#FFFFFF] border-[#E2E2E2]"
            >
              <div className="flex flex-col pt-[30px] px-[36px] pb-[47px]">
                <div className="w-auto h-auto">
                  <img src={Icon2Left} alt="" />
                </div>
                <div className="max-w-[188px] w-full lg:h-[37px] h-auto mt-[25px] font-poppins font-semibold text-[18px] leading-[22.5px] text-[#091156]">
                  <p className="m-0">Beauty consultation</p>
                </div>
                <div className="max-w-[189px] w-full lg:h-[63px] h-auto font-poppins font-normal text-[14px] leading-[21px] tracking-[0.1em] text-[#8B8B8B]">
                  <p className="m-0">
                    Lorem ipsum dolor sit
                    <br />
                    amet, consectetur
                    <br />
                    adipiscing.
                  </p>
                </div>
                <button className="w-auto h-auto mt-[17px] cursor-pointer">
                  <img src={LearnMoreButtonUs} alt="" />
                </button>
              </div>
            </div>
            {/* Middle box */}
            <div
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-[261px] w-full
             rounded-[25px] border-[1px] bg-[#FFFFFF] border-[#E2E2E2]"
            >
              <div className="flex flex-col pt-[30px] px-[36px] pb-[47px]">
                <div className="w-auto h-auto">
                  <img src={Icon2Mid} alt="" />
                </div>
                <div className="max-w-[188px] w-full lg:h-[37px] h-auto mt-[25px] font-poppins font-semibold text-[18px] leading-[22.5px] text-[#091156]">
                  <p className="m-0">Skin treatments</p>
                </div>
                <div className="max-w-[189px] w-full lg:h-[63px] h-auto font-poppins font-normal text-[14px] leading-[21px] tracking-[0.1em] text-[#8B8B8B]">
                  <p className="m-0">
                    Lorem ipsum dolor sit
                    <br />
                    amet, consectetur
                    <br />
                    adipiscing.
                  </p>
                </div>
                <button className="w-auto h-auto mt-[17px] cursor-pointer">
                  <img src={LearnMoreButtonUs} alt="" />
                </button>
              </div>
            </div>
            {/* Right box */}
            <div
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 max-w-[261px] w-full
             rounded-[25px] border-[1px] bg-[#FFFFFF] border-[#E2E2E2]"
            >
              <div className="flex flex-col pt-[30px] px-[36px] pb-[47px]">
                <div className="w-auto h-auto">
                  <img src={Icon2Right} alt="" />
                </div>
                <div className="max-w-[188px] w-full lg:h-[37px] h-auto mt-[25px] font-poppins font-semibold text-[18px] leading-[22.5px] text-[#091156]">
                  <p className="m-0">Beauty product</p>
                </div>
                <div className="max-w-[189px] w-full lg:h-[63px] h-auto font-poppins font-normal text-[14px] leading-[21px] tracking-[0.1em] text-[#8B8B8B]">
                  <p className="m-0">
                    Lorem ipsum dolor sit
                    <br />
                    amet, consectetur
                    <br />
                    adipiscing.
                  </p>
                </div>
                <button className="w-auto h-auto mt-[17px] cursor-pointer">
                  <img src={LearnMoreButtonUs} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wave line */}
      <div className="relative mt-[-166px] z-[0] hidden md:hidden lg:block ">
        <img src={WaveLine} alt="" />
      </div>
    </div>
  );
};
export default MainServices;
